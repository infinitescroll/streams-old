const initialState = {
  streams: {
    items: {},
    requested: false,
    requestedSuccess: false,
    requestedError: false,
    error: null,
  },
  peers: {},
  profile: {
    requested: false,
    requestedSuccess: false,
    requestedError: false,
    error: null,
    id: '',
  },
  forms: {
    stream: {
      name: '',
      type: '',
      sharing: '',
      disabled: false,
    },
    streams: {},
  },
}

const initialPeerState = {
  streams: new Set(),
  requestedNewStream: false,
  requestedNewStreamSuccess: false,
  requestedNewStreamError: false,
  error: null,
}

export const requestedNewStream = (state = initialState, peerId) => {
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        requestedNewStream: true,
        requestedNewStreamSuccess: false,
        requestedNewStreamError: false,
        error: null,
      },
    },
  }
}

export const requestedNewStreamSuccess = (state, peerId, stream) => {
  const { id } = stream
  const streams = state.peers[peerId].streams
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        streams: streams.add(id),
        requestedNewStream: false,
        requestedNewStreamSuccess: true,
        requestedNewStreamError: false,
        error: null,
      },
    },
    streams: {
      ...state.streams,
      items: {
        ...state.streams.items,
        [id]: stream,
      },
    },
  }
}

export const requestedNewStreamError = (state, peerId, error) => {
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        requestedNewStream: false,
        requestedNewStreamSuccess: false,
        requestedNewStreamError: true,
        error,
      },
    },
  }
}

export const requestedStream = (state = initialState, id) => {
  return {
    ...state,
    streams: {
      ...state.streams,
      [id]: {
        ...state.streams[id],
        requestedStream: true,
        requestedStreamSuccess: false,
        requestedStreamError: false,
      },
    },
  }
}

export const requestedStreamSuccess = (state, stream) => {
  const { id } = stream
  return {
    ...state,
    streams: {
      ...state.streams,
      items: {
        ...state.streams.items,
        [id]: stream,
      },
    },
  }
}

export const requestedStreamError = (state, id, error) => {
  return {
    ...state,
    streams: {
      ...state.streams,
      [id]: {
        ...state.streams[id],
        requestedStream: false,
        requestedStreamSuccess: false,
        requestedStreamError: true,
        error,
      },
    },
  }
}

export const requestedProfile = state => ({
  ...state,
  profile: {
    ...state.profile,
    requested: true,
    requestedSuccess: false,
    requestedError: false,
    error: null,
  },
})

export const requestedProfileSuccess = (state, profile) => ({
  ...state,
  profile: {
    ...state.profile,
    requested: false,
    requestedSuccess: true,
    requestedError: false,
    ...profile,
    error: null,
  },
  peers: {
    [profile.id]: initialPeerState,
  },
})

export const requestedProfileError = (state, error) => ({
  ...state,
  profile: {
    ...state.profile,
    requested: false,
    requestedSuccess: false,
    requestedError: true,
    error,
  },
})

export const requestedStreams = state => ({
  ...state,
  streams: {
    ...state.streams,
    requested: true,
    requestedSuccess: false,
    requestedError: false,
    error: null,
  },
})

const constructStreams = items => {
  const obj = {}
  items.forEach(item => {
    obj[item.id] = item
  })

  return obj
}

export const requestedStreamsSuccess = (state, streams) => {
  const constructedStreams = constructStreams(streams.items)
  return {
    ...state,
    streams: {
      ...state.streams,
      requested: false,
      requestedSuccess: true,
      requestedError: false,
      items: {
        ...state.streams.items,
        ...constructedStreams,
      },
      error: null,
    },
  }
}

export const requestedStreamsError = (state, error) => ({
  ...state,
  profile: {
    ...state.profile,
    requested: false,
    requestedSuccess: false,
    requestedError: true,
    error,
  },
})

export const changedInput = (state, name, val) => ({
  ...state,
  forms: {
    ...state.forms,
    [name]: val,
  },
})

export const changedStreamInput = (state, name, val) => ({
  ...state,
  forms: {
    ...state.forms,
    stream: {
      ...state.forms.stream,
      [name]: val,
    },
  },
})

export const changedMessageInput = (state, streamId, val) => ({
  ...state,
  forms: {
    ...state.forms,
    streams: {
      ...state.forms.streams,
      [streamId]: {
        ...state.forms.streams[streamId],
        message: val,
      },
    },
  },
})

export default initialState
