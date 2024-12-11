import fastify, { FastifyServerOptions } from 'fastify'

const routes = import.meta.glob<any>('./routes/**/*.ts', { eager: true })

export const createApp = (options?: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(import('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Selfie Stand API',
        description: 'API documentation for the selfie stand project',
        version: '0.0.1',
      },
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  app.register(import('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
    },
  })

  const routePrefix = '/api'
  for (const [key, route] of Object.entries(routes)) {
    if (typeof route.default !== 'function') {
      continue
    }
    const path = key.slice('./routes/'.length).split('/')
    app.register(route, { prefix: [routePrefix, ...path.slice(0, -1)].join('/') })
  }

  app.addHook('onRequest', (request, reply, done) => {
    console.info(`[${request.method}] ${request.url}`)
    done()
  })

  return app
}
