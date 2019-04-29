const initialState = {
  streams: {
    items: {},
    requesting: false,
    requestingSuccess: false,
    requestingError: false,
    error: null,
  },
  peers: {},
  profile: {
    requesting: false,
    requestingSuccess: false,
    requestingError: false,
    error: null,
    id: '',
  },
  forms: {
    stream: {
      name: '',
    },
  },
}

const initialPeerState = {
  streams: new Set(),
  requestingNewStream: false,
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
        requestingNewStream: true,
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
        requestingNewStream: false,
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
        requestingNewStream: false,
        requestedNewStreamSuccess: false,
        requestedNewStreamError: true,
        error,
      },
    },
  }
}

export const requestedProfile = state => ({
  ...state,
  profile: {
    ...state.profile,
    requesting: true,
    requestedSuccess: false,
    requestedError: false,
    error: null,
  },
})

export const requestedProfileSuccess = (state, profile) => ({
  ...state,
  profile: {
    ...state.profile,
    requesting: false,
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
    requesting: false,
    requestedSuccess: false,
    requestedError: true,
    error,
  },
})

export const requestedStreams = state => ({
  ...state,
  streams: {
    ...state.streams,
    requesting: true,
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
      requesting: false,
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
    requesting: false,
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

export default initialState
