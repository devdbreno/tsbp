export interface IServerAdapter {
  start(): Promise<void>
  close(): Promise<void>
}
