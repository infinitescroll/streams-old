import { textile } from '../textile'

import streamEventSchema from '../constants/streamEventSchema'

export const streamService = {
  create: async stream => {
    const { hash } = await textile.schemas.add(streamEventSchema)
    return textile.threads.add(
      stream.name,
      hash,
      null,
      stream.type,
      stream.sharing
    )
  },
  createMessage: async (streamId, message, file = '') => {
    return textile.files.add(
      JSON.stringify({
        text: message,
        file,
      }),
      'caption',
      streamId
    )
  },
  // wip
  addWebhook: async streamId => {
    return textile.files.add(
      JSON.stringify({
        type: 'ADD_GITHUB_WEBHOOK',
        data: {
          repo: 'web3-state-manager',
          webhookEvents: ['*'],
          githubUsername: 'schwartz10',
        },
      }),
      'caption',
      streamId
    )
  },
  get: async id => textile.threads.get(id),
  invite: async (streamId, inviterId, inviteeAddress) => {
    console.log(streamId, inviterId, inviteeAddress)
    const contactAdded = await textile.contacts.add(inviteeAddress)
    console.log(contactAdded)
    // const invite = await textile.invites.create(streamId, inviteeAddress)
    // console.log(invite)
  },
  getPeerId: async () => {
    const { id } = await textile.profile.get()
    return id
  },
}
