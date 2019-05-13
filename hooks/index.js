import { useEffect } from 'react'
import { textile } from '../textile'

export const useStreams = (profileId, requestCb, successCb, errorCb) => {
  useEffect(() => {
    const loadThreads = async () => {
      requestCb(profileId)
      try {
        const streamsList = await textile.threads.list()
        successCb(streamsList)
      } catch (error) {
        errorCb(error)
      }
    }
    if (profileId) {
      loadThreads()
    }
  }, [profileId, requestCb, successCb, errorCb])
}
