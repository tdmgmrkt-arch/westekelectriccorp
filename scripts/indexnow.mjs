#!/usr/bin/env node
/**
 * Push every URL in the live sitemap to IndexNow (Bing, Yandex, Naver).
 *
 *   node scripts/indexnow.mjs
 *
 * Run it after any deploy that adds or changes pages. Google does NOT
 * participate in IndexNow - for Google you still submit the sitemap in
 * Search Console.
 *
 * The key is read from INDEXNOW_KEY, or from the .indexnow-key file at the
 * repo root (gitignored). The matching public/<key>.txt must be deployed and
 * serving the key as its only contents, or IndexNow rejects the submission.
 */
import { readFileSync, existsSync } from 'node:fs'

const HOST = 'www.westekelectriccorp.com'
const SITEMAP = `https://${HOST}/sitemap.xml`

function getKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim()
  if (existsSync('.indexnow-key')) return readFileSync('.indexnow-key', 'utf8').trim()
  throw new Error('No IndexNow key: set INDEXNOW_KEY or create .indexnow-key')
}

const key = getKey()
const keyLocation = `https://${HOST}/${key}.txt`

// The key file must be live before submitting, or the whole batch is rejected.
const probe = await fetch(`${keyLocation}?cb=${Date.now()}`)
const served = (await probe.text()).trim()
if (!probe.ok || served !== key) {
  throw new Error(`Key file not serving correctly at ${keyLocation} (HTTP ${probe.status})`)
}
console.log(`key file verified: ${keyLocation}`)

const xml = await (await fetch(`${SITEMAP}?cb=${Date.now()}`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (!urlList.length) throw new Error('No URLs found in sitemap')
console.log(`submitting ${urlList.length} URLs (${urlList.filter((u) => u.includes('/news/')).length} blog posts)`)

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
})

// IndexNow returns 200 or 202 on success; 4xx means the key or payload is wrong.
if (res.status !== 200 && res.status !== 202) {
  throw new Error(`IndexNow rejected the submission: HTTP ${res.status} ${await res.text()}`)
}
console.log(`IndexNow accepted the submission (HTTP ${res.status})`)
