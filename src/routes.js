import express from 'express'
import { download, isDownloaded, ensureDownload, getFolderRoot, forkAndBuild } from './utils.js'
import qs from 'qs'
import fs from 'fs'
import { promisify } from 'util'
import glob from 'glob'
import { spawnChild } from './process.js'

export const router = express.Router()

router.get('/manifest', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  const manifest = await forkAndBuild(pkg)
  res.json(manifest)
})

router.get('/meta', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  await ensureDownload(pkg)
  const pkgPath = getFolderRoot('pkgs', pkg.name + '@' + pkg.version)
  const output = await glob(pkgPath + '/**/*')
  res.json(output)
})

router.get('/types', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  const output = await download(pkg)
  res.json(output)
})
