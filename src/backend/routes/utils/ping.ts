import { FastifyInstance, FastifySchema } from 'fastify'

/**
 * Registers a route on the Fastify instance to respond to GET requests at "/ping" with "pong".
 *
 * @param fastify - The Fastify instance to register the route on.
 */

export const pingSchema: FastifySchema = {
  summary: 'Ping route',
  description: 'Responds with "pong" when a GET request is made to "/ping".',
  tags: ['Utils'],
}

export default async (fastify: FastifyInstance) => {
  /**
   * Responds with 'pong' when a GET request is made to '/ping'.
   */
  fastify.get('/ping', { schema: pingSchema }, async (req, reply) => {
    reply.send('pong')
  })
}
