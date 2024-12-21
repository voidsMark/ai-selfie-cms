import { FastifyInstance, FastifySchema } from 'fastify'
import { userStore } from '@/backend/stores/userStore'
import { useUtils } from '@/backend/utils/utils'

const utils = useUtils()
const users = userStore()

export const selectSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['clientId', 'userUuid'],
    properties: {
      clientId: { type: 'string' },
      userUuid: { type: 'string' },
    },
  },
  summary: 'Select client',
  description: 'Associates a client ID with a client UUID.',
  tags: ['Client Management'],
}

export default async (fastify: FastifyInstance) => {
  fastify.post('/select', { schema: selectSchema }, async (req, reply) => {
    const { clientId, userUuid } = req.body as { clientId: string; userUuid: string }

    if (users.hasUser(clientId)) {
      console.log('Client is busy.')
      reply.code(423).send('busy')
      return
    }
    users.addUser(clientId, { userUuid })

    // eslint-disable-next-line no-use-before-define
    removeUserByTimeout(clientId)

    console.log('Updated users:', users.getUsers())
    reply.code(200).send('ok')
  })
}

const removeUserByTimeout = async (clientId: string, timeout: number = 10) => {
  try {
    await utils.sleep(timeout * 1000)
    users.removeUser(clientId)
    console.log('User removed by timeout:', clientId)
  } catch (error) {
    console.log('removeUserByTimeout error:', error)
  }
}
