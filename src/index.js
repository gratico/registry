import express from 'express'
import serveIndex from 'serve-index'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import mime from 'mime'
import { router } from './routes.js'
import { packageURLMiddleware } from './middleware.js'
import { getFolderRoot, install } from './utils.js'
import morgan from 'morgan'
const server = express()
server.use(morgan('tiny'))
server.use(compression())
server.use(cors())
server.use(bodyParser.json())

const oneYear = 60 * 1000 * 60 * 24 * 365

server.post('/~/install', async (req, res) => {
  const resp = await install(req.body)
  res.json(resp)
})

server.use(
  '/~',
  express.static(getFolderRoot(), {
    maxAge: oneYear,
    setHeaders: function (res, p, stat) {
      const ext = path.extname(p)
      const mimeType = ext ? mime.getType(ext.slice(1)) : null
      if (!mimeType) {
        res.set('content-type', 'application/javascript')
      }
    }
  }),
  serveIndex(getFolderRoot(), { icons: true })
)

server.get('/', (req, res) => {
  res.json({})
})

server.use(packageURLMiddleware)
server.use('/npm/:ns/:n/:v', router)
server.use('/npm/:n/:v', router)

const port = process.env.PORT || 5200
server.listen(port, (err) => {
  console.log('listening on port', port)
})
