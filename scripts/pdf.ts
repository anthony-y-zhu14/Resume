

import path from "node:path"
import { chromium } from "playwright"

const root = process.cwd()
const htmlPath = path.join(root, "dist/index.html")
const pdfPath = path.join(root, "resume.pdf")
const browser = await chromium.launch()
const page = await browser.newPage()
const url = `file://${htmlPath}`

await page.goto(url)

await page.waitForTimeout(2000)

await page.emulateMedia({ media: "print" })
await page.evaluate(() => document.fonts?.ready)

await page.pdf({
  path: pdfPath,
  preferCSSPageSize: true
})

await browser.close()
console.log(`Wrote ${pdfPath}`)
