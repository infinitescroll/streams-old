const initialState = {
  threads: {},
  peers: {},
  profile: {
    loading: false,
    loadedSuccess: false,
    loadedError: false,
    error: null,
    id: ""
  }
};

const initialPeerState = {
  threads: new Set(),
  requestingNewThread: false,
  requestedNewThreadSuccess: false,
  requestedNewThreadError: false,
  error: null
};

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
        error: null
      }
    }
  };
};

export const requestedNewThreadSuccess = (state, peerId, thread) => {
  const { id } = thread;
  const threads = state.peers[peerId].threads;
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
        error: null
      }
    },
    threads: {
      ...state.threads,
      [id]: thread
    }
  };
};

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
        error
      }
    }
  };
};

export const requestedProfile = state => ({
  ...state,
  profile: {
    ...state.profile,
    requesting: true,
    requestedSuccess: false,
    requestedError: false,
    error: null
  }
});

export const requestedProfileSuccess = (state, profile) => ({
  ...state,
  profile: {
    ...state.profile,
    requesting: false,
    requestedSuccess: true,
    requestedError: false,
    ...profile,
    error: null
  },
  peers: {
    [profile.id]: initialPeerState
  }
});

export const requestedProfileError = (state, error) => ({
  ...state,
  profile: {
    ...state.profile,
    requesting: false,
    requestedSuccess: false,
    requestedError: true,
    error
  }
});

export const changedInput = (state, title, name, val) => ({
  ...state,
  threads: {
    ...state.threads
  },
  [title]: { ...state[title], [name]: val }
});

export default initialState;
