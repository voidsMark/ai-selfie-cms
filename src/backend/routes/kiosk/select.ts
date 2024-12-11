import { FastifyInstance, FastifySchema } from 'fastify'
import { userStore } from '@/backend/stores/userStore'

const users = userStore()

export const selectSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['clientId', 'clientUuid'],
    properties: {
      clientId: { type: 'string' },
      clientUuid: { type: 'string' },
    },
  },
  summary: 'Select client',
  description: 'Associates a client ID with a client UUID.',
  tags: ['Client Management'],
}

export default async (fastify: FastifyInstance) => {
  fastify.post('/select', { schema: selectSchema }, async (req, reply) => {
    const { clientId, clientUuid } = req.body as { clientId: string; clientUuid: string }
    if (!users.hasUser(clientId)) {
      users.addUser(clientId, { userUuid: clientUuid })
      console.log(users.getUsers())
      reply.code(200).send('ok')
      return
    }

    reply.code(423).send('busy')
  })
}
