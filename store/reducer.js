import _ from 'lodash'

import initialState, {
  requestedNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
  requestedProfile,
  requestedProfileSuccess,
  requestedProfileError,
  requestedThreads,
  requestedThreadsSuccess,
  requestedThreadsError,
  changedInput,
} from './states'
import {
  REQUESTED_NEW_THREAD,
  REQUESTED_NEW_THREAD_SUCCESS,
  REQUESTED_NEW_THREAD_ERROR,
  REQUESTED_PROFILE,
  REQUESTED_PROFILE_SUCCESS,
  REQUESTED_PROFILE_ERROR,
  REQUESTED_THREADS,
  REQUESTED_THREADS_SUCCESS,
  REQUESTED_THREADS_ERROR,
  CHANGED_INPUT,
} from './actionTypes'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_INPUT: {
      return changedInput(_.cloneDeep(state), action.name, action.val)
    }
    case REQUESTED_NEW_THREAD: {
      return requestedNewThread(_.cloneDeep(state), action.meta.address)
    }
    case REQUESTED_NEW_THREAD_SUCCESS: {
      return requestedNewThreadSuccess(
        _.cloneDeep(state),
        action.meta.address,
        action.payload.threadId
      )
    }
    case REQUESTED_NEW_THREAD_ERROR: {
      return requestedNewThreadError(
        _.cloneDeep(state),
        action.meta.address,
        action.error
      )
    }
    case REQUESTED_PROFILE: {
      return requestedProfile(_.cloneDeep(state))
    }
    case REQUESTED_PROFILE_SUCCESS: {
      return requestedProfileSuccess(_.cloneDeep(state), action.payload.profile)
    }
    case REQUESTED_PROFILE_ERROR: {
      return requestedProfileError(_.cloneDeep(state), action.error)
    }
    case REQUESTED_THREADS: {
      return requestedThreads(_.cloneDeep(state))
    }
    case REQUESTED_THREADS_SUCCESS: {
      return requestedThreadsSuccess(_.cloneDeep(state), action.payload.threads)
    }
    case REQUESTED_THREADS_ERROR: {
      return requestedThreadsError(_.cloneDeep(state), action.error)
    }
    default:
      return _.cloneDeep(state)
  }
}

export default reducer
