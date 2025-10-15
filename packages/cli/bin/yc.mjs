#!/usr/bin/env node
import { readFile, cp, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import process from "node:process"
import url from "node:url"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

function resolveTemplatesRoot() {
  // bundled with the CLI package
  const packaged = path.join(__dirname, "..", "templates", "template-registry.json")
  if (existsSync(packaged)) return path.join(__dirname, "..", "templates")
  throw new Error("Templates not found in CLI package: " + packaged)
}

async function loadRegistry(templatesRoot) {
  const registryPath = path.join(templatesRoot, "template-registry.json")
  const reg = JSON.parse(await readFile(registryPath, "utf8"))
  // be tolerant: support {templates: [...]}, [...], or a single object
  const list =
    Array.isArray(reg?.templates) ? reg.templates :
    Array.isArray(reg) ? reg :
    (reg && reg.name) ? [reg] : []
  return { list, registryPath }
}

async function main() {
  const [,, cmd, templateName, ...rest] = process.argv

  // Debug/helper command
  if (cmd === "list") {
    const templatesRoot = resolveTemplatesRoot()
    const { list, registryPath } = await loadRegistry(templatesRoot)
    console.log("Templates root:", templatesRoot)
    console.log("Registry path:", registryPath)
    console.log("Available:", list.length ? list.map(t => t.name).join(", ") : "(none)")
    process.exit(0)
  }

  if (cmd !== "install" || !templateName) {
    console.log("Usage:\n  yc install <template-name> [--to ./]\n  yc list")
    process.exit(1)
  }

  const toIdx = rest.indexOf("--to")
  const targetDir = toIdx !== -1 ? rest[toIdx + 1] : "./"

  const templatesRoot = resolveTemplatesRoot()
  const { list } = await loadRegistry(templatesRoot)

  const tmpl = list.find(t => t.name === templateName)
  if (!tmpl) {
    console.error(`Template "${templateName}" not found.\nAvailable: ${list.map(t => t.name).join(", ") || "(none)"}`)
    process.exit(1)
  }

  const fromRoot = path.join(templatesRoot, templateName, "files")
  const dest = path.resolve(process.cwd(), targetDir)

  if (!existsSync(dest)) await mkdir(dest, { recursive: true })
  await cp(fromRoot, dest, { recursive: true })

  console.log(`✅ Installed "${templateName}" into ${targetDir}`)
  console.log(`• Entry file: ${tmpl.entry}`)
  if (tmpl.assets?.length) console.log(`• Assets copied: ${tmpl.assets.join(", ")}`)

  // Check missing shadcn components
  const neededShadcn = tmpl.peerSetup?.shadcn ?? []
  const missing = []
  for (const c of neededShadcn) {
    const p = path.join(dest, "src", "components", "ui", `${c}.tsx`)
    if (!existsSync(p)) missing.push(c)
  }
  if (missing.length) {
    console.log(`• Missing shadcn components: ${missing.join(", ")}`)
    console.log(`  Run: pnpm dlx shadcn@latest add ${missing.join(" ")}`)
  }

  // Print required npm deps
  const deps = tmpl.peerSetup?.npmDeps ?? []
  if (deps.length) {
    console.log(`• Required npm deps: ${deps.join(", ")}`)
    console.log(`  Run: pnpm add ${deps.join(" ")}`)
  }

  console.log("Next steps:")
  console.log('  1) Import the page, e.g.: import LandingModern from "@/pages/LandingModern"')
  console.log("  2) Ensure Tailwind + shadcn are initialized in this app.")
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
