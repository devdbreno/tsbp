import { fastify, FastifyInstance, FastifyServerOptions } from 'fastify'

import { IServerAdapter } from '@frameworks/api/interfaces'

export default class FastifyServerAdapter implements IServerAdapter {
  public readonly server: FastifyInstance

  constructor(fastifyOptions: FastifyServerOptions) {
    this.server = fastify(fastifyOptions)
  }

  public async start(): Promise<void> {
    try {
      console.info(`[INFO] <FastifyServerAdapter> Server is starting...`)
    } catch ({ message }) {
      console.error(`[ERROR] <FastifyServerAdapter> Error starting the server: ${message}`)
    }
  }

  public async close(): Promise<void> {
    try {
      console.info(`[INFO] <FastifyServerAdapter> Server is closing...`)
    } catch ({ message }) {
      console.error(`[ERROR] <FastifyServerAdapter> Error closing the server: ${message}`)
    }
  }
}
