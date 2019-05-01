import React, { useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  changedStreamInput,
  requestedStream,
  requestedStreamSuccess,
  requestedStreamError,
} from '../../store/actions'
import { streamService } from '../../lib/streamService.js'

const View = ({
  requestedStream,
  requestedStreamSuccess,
  requestedStreamError,
  id,
  streams,
}) => {
  useEffect(() => {
    const getStreams = async () => {
      requestedStream()
      try {
        const stream = await streamService.get(id)
        requestedStreamSuccess(stream)
      } catch (error) {
        requestedStreamError(error)
      }
    }
    getStreams()
  }, [id, requestedStream, requestedStreamError, requestedStreamSuccess])
  return (
    <div>
      <Link href="/">home</Link>
      stream {streams.items[id] ? streams.items[id].name : '...'}
    </div>
  )
}

View.getInitialProps = ({ query: { id } }) => {
  return { id: id }
}

View.propTypes = {
  requestedStream: PropTypes.func.isRequired,
  requestedStreamSuccess: PropTypes.func.isRequired,
  requestedStreamError: PropTypes.func.isRequired,
}

View.defaultProps = {
  profile: {},
}

const mapStateToProps = ({ peers, forms, streams }) => ({
  peers,
  forms,
  streams,
})

export default connect(
  mapStateToProps,
  {
    changedStreamInput,
    requestedStream,
    requestedStreamSuccess,
    requestedStreamError,
  }
)(View)
