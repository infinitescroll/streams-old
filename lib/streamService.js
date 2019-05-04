import { textile } from '../textile'

export const streamService = {
  create: async stream =>
    textile.threads.add(
      stream.name,
      'QmPjLKunL9LDECrxyrz3x9JyzcwQvychYxn7hc7Mf69KVd',
      null,
      stream.type,
      stream.sharing
    ),
  createMessage: async (streamId, message) => {
    return textile.files.add(
      JSON.stringify({
        text: message,
        file: 'QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH',
      }),
      'yerr',
      streamId
    )
  },
  get: async id => textile.threads.get(id),
}
