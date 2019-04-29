import {
  REQUESTED_PROFILE,
  REQUESTED_PROFILE_SUCCESS,
  REQUESTED_PROFILE_ERROR,
  REQUESTED_STREAMS,
  REQUESTED_STREAMS_SUCCESS,
  REQUESTED_STREAMS_ERROR,
  REQUESTED_NEW_STREAM,
  REQUESTED_NEW_STREAM_SUCCESS,
  REQUESTED_NEW_STREAM_ERROR,
  CHANGED_INPUT,
  CHANGED_STREAM_INPUT,
} from './actionTypes'

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

export const requestedNewStream = address => ({
  type: REQUESTED_NEW_STREAM,
  meta: { address },
})

export const requestedNewStreamSuccess = (address, streamId) => ({
  type: REQUESTED_NEW_STREAM_SUCCESS,
  meta: { address },
  payload: { streamId },
})

export const requestedNewStreamError = (address, error) => ({
  type: REQUESTED_NEW_STREAM_ERROR,
  meta: { address },
  error,
})

export const requestedStreams = () => ({
  type: REQUESTED_STREAMS,
})

export const requestedStreamsSuccess = streams => ({
  type: REQUESTED_STREAMS_SUCCESS,
  payload: { streams },
})

export const requestedStreamsError = error => ({
  type: REQUESTED_STREAMS_ERROR,
  error,
})

export const changedInput = (name, val) => ({
  type: CHANGED_INPUT,
  name,
  val,
})

export const changedStreamInput = (name, val) => ({
  type: CHANGED_STREAM_INPUT,
  name,
  val,
})
