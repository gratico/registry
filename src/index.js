import express from 'express'
import serveIndex from 'serve-index'
import compression from 'compression'
import cors from 'cors'
import { build, bundle, download, isDownloaded } from './utils.js'
import qs from 'qs'
import bodyParser from 'body-parser'

const server = express()
server.use(compression())
server.use(cors())
server.use(bodyParser.json())

server.get('/manifest', async (req, res) => {
  const output = await download(qs.parse(req.query) || { name: 'react', version: '17.0.0' })
  res.json(output)
})

server.get('/build', async (req, res) => {
  const output = await build(qs.parse(req.query) || { name: 'react', version: '17.0.0' })
  res.json(output)
})

server.get('/bundle', async (req, res) => {
  const output = await bundle(qs.parse(req.query) || { name: 'react', version: '17.0.0', main: 'index.js' })
  res.json(output)
})

server.use('/', express.static('public'), serveIndex('public', { icons: true }))

const port = process.env.PORT || 5200
server.listen(port, (err) => {
  console.log('listening on port', port)
  console.log(err)
})
