const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const { PORT, NODE_ENV } = process.env
const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const devProxy = {
  '/api': {
    target: 'https://blade-gateway.zhaojiafang.com/blade-auth/oauth/token', //java: 环境，端口自己配置合适的
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  },
  '/blade': {
    target: `http://blade-gateway.${dev ? NODE_ENV+ '.' : ''}zhaojiafang.com`, 
    changeOrigin: true,
    pathRewrite: {
      '': '',
    },
  },
  '/zjf': {
    target: `http://blade-gateway.${dev ? NODE_ENV+ '.' : ''}zhaojiafang.com`,
    changeOrigin: true,
    pathRewrite: {
      '': '',
    },
  },
  '/php': {
    target: 'http://localhost:8000', //php: 环境，端口自己配置合适的
    pathRewrite: {
      '^/php': '/'
    },
    changeOrigin: true
  },
}

app.prepare()
  .then(() => {
    const server = express()
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }
    server.all('*', (req, res) => {
      handle(req, res)
    })
    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })