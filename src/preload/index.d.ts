import { ElectronAPI } from '@electron-toolkit/preload'

interface MessagePayload {
  brokersUrl: string,
  schemaRegistryUrl: string,
  schemaId: number,
  topic: string,
  message: string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      fetchSchemaRegistry: (schemRegistryUrl: string) => Promise<any>,
      fetchLatestSchemaId: (schemRegistryUrl: string, subject: string) => Promise<number>,
      sendMessage: (messagePayload: MessagePayload) => Promise<any>
    }
  }
}