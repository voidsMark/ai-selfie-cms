import dotenv from 'dotenv'
import { createApp } from './app'

dotenv.config()

const app = createApp({ bodyLimit: 128 * 1024 })

const main = async () => {
  try {
    const port = parseInt(process.env.PORT || '', 10) || 3001
    const time = Date.now()
    const address = await app.listen({ port, host: '0.0.0.0' })

    const launchTime = Math.floor((Date.now() - time) / 100) / 10
    console.info(`Server launched on ${address}. Launch time: ${launchTime}s`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
main()
