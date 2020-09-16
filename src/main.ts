import 'module-alias/register'

import { fastifyServer } from '@frameworks/api/server'

async function bootstrap() {
  await fastifyServer.start()
}

bootstrap()
