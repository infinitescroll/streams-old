import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import { StreamList } from '../components/'
import {
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
} from '../store/actions'
import { useStreams } from '../hooks'

import '../styles/index.scss'

const Home = ({
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
  profile,
  streams,
}) => {
  useStreams(
    profile.id,
    requestedStreams,
    requestedStreamsSuccess,
    requestedStreamsError
  )

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
