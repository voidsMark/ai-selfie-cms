import { FastifyInstance } from 'fastify'

/**
 * Registers a route on the Fastify instance to respond to GET requests at "/ping" with "pong".
 *
 * @param fastify - The Fastify instance to register the route on.
 */
export default async (fastify: FastifyInstance) => {
  /**
   * Responds with 'pong' when a GET request is made to '/ping'.
   */
  fastify.get('/ping', async (req, reply) => {
    reply.send('pong')
  })
}
