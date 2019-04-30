import { connect } from 'react-redux'
import React, { Fragment, useEffect } from 'react'
import { StreamList } from '../components/'
import {
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
} from '../store/actions'
import { textile } from '../textile'

import '../styles/index.scss'

const Home = ({
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
  profile,
  streams,
}) => {
  useEffect(() => {
    const loadThreads = async () => {
      requestedStreams(profile.id)
      try {
        const streamsList = await textile.threads.list()
        console.log('streamsList', streamsList)
        requestedStreamsSuccess(streamsList)
      } catch (error) {
        requestedStreamsError(error)
      }
    }

    loadThreads()
  }, [
    requestedStreams,
    requestedStreamsSuccess,
    requestedStreamsError,
    profile.id,
  ])

  return (
    <Fragment>
      <h3>Streams</h3>
      <StreamList streams={streams.items} />
    </Fragment>
  )
}

const mapStateToProps = ({ streams, profile }) => ({
  streams,
  profile,
})

export default connect(
  mapStateToProps,
  {
    requestedStreams,
    requestedStreamsSuccess,
    requestedStreamsError,
  }
)(Home)
