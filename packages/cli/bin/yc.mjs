#!/usr/bin/env node
import { readFile, cp, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import process from "node:process"
import url from "node:url"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

function findRepoRoot(startDir) {
  let dir = startDir
  for (let i = 0; i < 8; i++) {
    const candidate = path.join(dir, "packages", "templates", "template-registry.json")
    if (existsSync(candidate)) return dir
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  throw new Error("Could not find packages/templates/template-registry.json from " + startDir)
}

async function main() {
  const [,, cmd, templateName, ...rest] = process.argv
  if (cmd !== "install" || !templateName) {
    console.log("Usage:\n  yc install <template-name> [--to ./]")
    process.exit(1)
  }

  const toIdx = rest.indexOf("--to")
  const targetDir = toIdx !== -1 ? rest[toIdx + 1] : "./"

  // Locate registry
  const monorepoRoot = findRepoRoot(path.resolve(__dirname, "..")) // start at .../packages/cli
  const registryPath = path.join(monorepoRoot, "packages", "templates", "template-registry.json")
  const registry = JSON.parse(await readFile(registryPath, "utf8"))

  const list = Array.isArray(registry.templates) ? registry.templates : []
  const tmpl = list.find(t => t.name === templateName)
  if (!tmpl) {
    console.error(`Template "${templateName}" not found.\nAvailable: ${list.map(t => t.name).join(", ") || "(none)"}`)
    process.exit(1)
  }

  // Copy files
  const fromRoot = path.join(monorepoRoot, "packages", "templates", templateName, "files")
  const dest = path.resolve(process.cwd(), targetDir)
  if (!existsSync(dest)) await mkdir(dest, { recursive: true })
  await cp(fromRoot, dest, { recursive: true })

  console.log(`✅ Installed "${templateName}" into ${targetDir}`)
  console.log(`• Entry file: ${tmpl.entry}`)
  if (tmpl.assets?.length) console.log(`• Assets copied: ${tmpl.assets.join(", ")}`)

  // Guide: missing shadcn components
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

  // Guide: required npm deps
  const deps = tmpl.peerSetup?.npmDeps ?? []
  if (deps.length) {
    console.log(`• Required npm deps: ${deps.join(", ")}`)
    console.log(`  Run: pnpm add ${deps.join(" ")}`)
  }

  console.log("Next steps:")
  console.log('  1) Import the page into your app, e.g.: import LandingModern from "@/pages/LandingModern"')
  console.log("  2) Ensure Tailwind + shadcn are initialized in this app.")
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
