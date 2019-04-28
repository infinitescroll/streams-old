const initialState = {
  threads: {
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
    newThread: '',
  },
}

const initialPeerState = {
  threads: new Set(),
  requestingNewThread: false,
  requestedNewThreadSuccess: false,
  requestedNewThreadError: false,
  error: null,
}

export const requestedNewThread = (state = initialState, peerId) => {
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        requestingNewThread: true,
        requestedNewThreadSuccess: false,
        requestedNewThreadError: false,
        error: null,
      },
    },
  }
}

export const requestedNewThreadSuccess = (state, peerId, thread) => {
  const { id } = thread
  const threads = state.peers[peerId].threads
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        threads: threads.add(id),
        requestingNewThread: false,
        requestedNewThreadSuccess: true,
        requestedNewThreadError: false,
        error: null,
      },
    },
    threads: {
      ...state.threads,
      items: {
        ...state.threads.items,
        [id]: thread,
      },
    },
  }
}

export const requestedNewThreadError = (state, peerId, error) => {
  return {
    ...state,
    peers: {
      ...state.peers,
      [peerId]: {
        ...state.peers[peerId],
        requestingNewThread: false,
        requestedNewThreadSuccess: false,
        requestedNewThreadError: true,
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

export const requestedThreads = state => ({
  ...state,
  threads: {
    ...state.threads,
    requesting: true,
    requestedSuccess: false,
    requestedError: false,
    error: null,
  },
})

const constructThreads = items => {
  const obj = {}
  items.forEach(item => {
    obj[item.id] = item
  })

  return obj
}

export const requestedThreadsSuccess = (state, threads) => {
  const constructedThreads = constructThreads(threads.items)
  return {
    ...state,
    threads: {
      ...state.threads,
      requesting: false,
      requestedSuccess: true,
      requestedError: false,
      items: {
        ...state.threads.items,
        ...constructedThreads,
      },
      error: null,
    },
  }
}

export const requestedThreadsError = (state, error) => ({
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
