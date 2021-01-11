import express from 'express'
import { build, bundle, download, ensureDownload, getFolderRoot } from './utils.js'
import qs from 'qs'
import fs from 'fs'
import { promisify } from 'util'
import glob from 'glob'

export const router = express.Router()

router.get('/manifest', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  await ensureDownload(pkg)
  const pkgPath = getFolderRoot('pkgs', pkg.name + '@' + pkg.version, 'package.json')
  const output = await promisify(fs.readFile)(pkgPath, 'utf8')
  res.json(JSON.parse(output))
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

router.get('/build', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion }
  const output = await build(pkg)
  res.json(output)
})

router.get('/bundle', async (req, res) => {
  const pkg = { name: req.packageName, version: req.packageVersion, main: 'index.js' }
  const output = await bundle(pkg)
  res.json(output)
})
