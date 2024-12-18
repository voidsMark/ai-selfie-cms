import { FastifyInstance, FastifySchema } from 'fastify'
import { userStore } from '@/backend/stores/userStore'
import { kioskStore } from '@/backend/stores/kioskStore'
import { useUtils } from '@/backend/utils/utils'

const users = userStore()
const kiosks = kioskStore()
const utils = useUtils()

export const connectSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['clientId'],
    properties: {
      clientId: { type: 'string' },
    },
  },
  summary: 'Connect client',
  description: 'Handles client connections',
  tags: ['Client'],
}

export default async (fastify: FastifyInstance) => {
  fastify.post('/connect', { schema: connectSchema }, async (req, reply) => {
    const { clientId } = req.body as { clientId: string | number }
    if (!clientId) {
      reply.code(400).send('clientId is required')
      return
    }

    if (kiosks.hasKiosk(clientId.toString())) {
      reply.code(409).send('client already connected')
      return
    }

    kiosks.addKiosk(clientId.toString())

    let retry = 0
    const retryInterval = 1000

    while (retry < 10) {
      console.info('Waiting for client to connect. Retry:', retry)

      if (users.hasUser(clientId.toString())) {
        const userUuid = users.getUser(clientId.toString())?.userUuid
        console.info('User connected. User uuid:', userUuid)
        reply.code(200).send(userUuid)
        return
      }
      // eslint-disable-next-line no-await-in-loop
      await utils.sleep(retryInterval)
      // eslint-disable-next-line no-plusplus
      retry++
    }

    kiosks.removeKiosk(clientId.toString())
    reply.code(404).send('No users found')
  })
}
