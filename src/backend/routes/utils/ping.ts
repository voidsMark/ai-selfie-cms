import { FastifyInstance, FastifySchema } from 'fastify'

export const pingSchema: FastifySchema = {
  summary: 'Ping route',
  description: 'Responds with "pong" when a GET request is made to "/ping".',
  tags: ['Utils'],
}

export default async (fastify: FastifyInstance) => {
  fastify.get('/ping', { schema: pingSchema }, async (req, reply) => {
    reply.send('pong')
  })
}
