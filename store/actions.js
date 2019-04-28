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

export const requestingNewThread = address => ({
  type: REQUESTED_NEW_THREAD,
  meta: { address },
})

export const requestedNewThreadSuccess = (address, threadId) => ({
  type: REQUESTED_NEW_THREAD_SUCCESS,
  meta: { address },
  payload: { threadId },
})

export const requestedNewThreadError = (address, error) => ({
  type: REQUESTED_NEW_THREAD_ERROR,
  meta: { address },
  error,
})

export const requestingProfile = () => ({
  type: REQUESTED_PROFILE,
})

export const requestedProfileSuccess = profile => ({
  type: REQUESTED_PROFILE_SUCCESS,
  payload: { profile },
})

export const requestedProfileError = error => ({
  type: REQUESTED_PROFILE_ERROR,
  error,
})

export const requestingThreads = () => ({
  type: REQUESTED_THREADS,
})

export const requestedThreadsSuccess = threads => ({
  type: REQUESTED_THREADS_SUCCESS,
  payload: { threads },
})

export const requestedThreadsError = error => ({
  type: REQUESTED_THREADS_ERROR,
  error,
})

export const changedInput = (name, val) => ({
  type: CHANGED_INPUT,
  name,
  val,
})
