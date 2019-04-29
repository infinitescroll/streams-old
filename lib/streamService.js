import { textile } from '../textile'

export const streamService = {
  create: async stream =>
    textile.threads.add(stream.name, null, null, stream.type, stream.sharing),
}
