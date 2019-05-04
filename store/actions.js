import {
  REQUESTED_PROFILE,
  REQUESTED_PROFILE_SUCCESS,
  REQUESTED_PROFILE_ERROR,
  REQUESTED_STREAM,
  REQUESTED_STREAM_SUCCESS,
  REQUESTED_STREAM_ERROR,
  REQUESTED_STREAMS,
  REQUESTED_STREAMS_SUCCESS,
  REQUESTED_STREAMS_ERROR,
  REQUESTED_NEW_STREAM,
  REQUESTED_NEW_STREAM_SUCCESS,
  REQUESTED_NEW_STREAM_ERROR,
  CHANGED_INPUT,
  CHANGED_STREAM_INPUT,
  CHANGED_MESSAGE_INPUT,
  REQUESTED_NEW_MESSAGE,
  REQUESTED_NEW_MESSAGE_SUCCESS,
  REQUESTED_NEW_MESSAGE_ERROR,
  REQUESTED_MESSAGE,
  REQUESTED_MESSAGE_SUCCESS,
  REQUESTED_MESSAGE_ERROR,
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

export const requestedStream = () => ({
  type: REQUESTED_STREAM,
})

export const requestedStreamSuccess = stream => ({
  type: REQUESTED_STREAM_SUCCESS,
  payload: { stream },
})

export const requestedStreamError = error => ({
  type: REQUESTED_STREAM_ERROR,
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

export const changedInput = (name, value) => ({
  type: CHANGED_INPUT,
  name,
  value,
})

export const changedStreamInput = (name, value) => ({
  type: CHANGED_STREAM_INPUT,
  name,
  value,
})

export const changedMessageInput = (streamId, value) => ({
  type: CHANGED_MESSAGE_INPUT,
  streamId,
  value,
})

export const requestedNewMessage = () => ({
  type: REQUESTED_NEW_MESSAGE,
})

export const requestedNewMessageSuccess = message => ({
  type: REQUESTED_NEW_MESSAGE_SUCCESS,
  payload: { message },
})

export const requestedNewMessageError = error => ({
  type: REQUESTED_NEW_MESSAGE_ERROR,
  error,
})

export const requestedMessage = () => ({
  type: REQUESTED_MESSAGE,
})

export const requestedMessageSuccess = message => ({
  type: REQUESTED_MESSAGE_SUCCESS,
  payload: { message },
})

export const requestedMessageError = error => ({
  type: REQUESTED_MESSAGE_ERROR,
  error,
})
