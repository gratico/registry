import express from 'express'
import serveIndex from 'serve-index'
import compression from 'compression'
import cors from 'cors'
import { build, bundle, download, ensureDownload, getFolderRoot } from './utils.js'
import qs from 'qs'
import bodyParser from 'body-parser'
import path from 'path'
import mime from 'mime'
import fs from 'fs'
import { promisify } from 'util'
import glob from 'glob'
const server = express()
server.use(compression())
server.use(cors())
server.use(bodyParser.json())

server.get('/manifest', async (req, res) => {
  const pkg = qs.parse(req.query) || { name: 'react', version: '17.0.0' }
  await ensureDownload(pkg)
  const pkgPath = getFolderRoot('public', 'pkgs', pkg.name + '@' + pkg.version, 'package.json')
  const output = await promisify(fs.readFile)(pkgPath, 'utf8')
  res.json(JSON.parse(output))
})

server.get('/meta', async (req, res) => {
  const pkg = qs.parse(req.query) || { name: 'react', version: '17.0.0' }
  await ensureDownload(pkg)
  const pkgPath = getFolderRoot('public', 'pkgs', pkg.name + '@' + pkg.version)
  const output = await glob(pkgPath + '/**/*')
  res.json(output)
})

server.get('/types', async (req, res) => {
  const pkg = qs.parse(req.query) || { name: 'react', version: '17.0.0' }
  const output = await download(pkg)
  res.json(output)
})

server.get('/build', async (req, res) => {
  const pkg = qs.parse(req.query) || { name: 'react', version: '17.0.0' }
  const output = await build()
  res.json(output)
})

server.get('/bundle', async (req, res) => {
  const pkg = qs.parse(req.query) || { name: 'react', version: '17.0.0', main: 'index.js' }
  const output = await bundle(pkg)
  res.json(output)
})

server.use(
  '/',
  express.static('public', {
    setHeaders: function (res, p, stat) {
      const ext = path.extname(p)
      const mimeType = ext ? mime.getType(ext.slice(1)) : null
      if (!mimeType) {
        res.set('content-type', 'application/javascript')
      }
    }
  }),
  serveIndex('public', { icons: true })
)

const port = process.env.PORT || 5200
server.listen(port, (err) => {
  console.log('listening on port', port)
  console.log(err)
})
