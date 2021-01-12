import express from 'express'
import { forkAndDownload, ensureDownload, getFolderRoot, forkAndBuild } from './utils.js'

import glob from 'glob'

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
  const output = await glob(pkgPath + '/**/*.js')
  res.json(output)
})

router.get('/types', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  const output = await forkAndDownload(pkg)
  res.json(output)
})
