import React, { useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestedStream,
  requestedStreamSuccess,
  requestedStreamError,
  changedMessageInput,
  requestedNewMessage,
  requestedNewMessageSuccess,
  requestedNewMessageError,
} from '../../store/actions'
import { streamService } from '../../lib/streamService.js'
import { MessageInput } from '../../components/'

const View = ({
  changedMessageInput,
  requestedStream,
  requestedStreamSuccess,
  requestedStreamError,
  requestedNewMessage,
  requestedNewMessageSuccess,
  requestedNewMessageError,
  id,
  streams,
  forms,
}) => {
  const onChange = e => {
    const value =
      !!forms.streams[id] && forms.streams[id].message === e.target.value
        ? ''
        : e.target.value
    changedMessageInput(id, value)
  }

  const onSubmit = async () => {
    requestedNewMessage()
    try {
      const message = await streamService.createMessage(
        id,
        forms.streams[id].message
      )
      requestedNewMessageSuccess()
    } catch (error) {
      requestedNewMessageError(error)
    }
  }

  useEffect(() => {
    const getStream = async () => {
      requestedStream()
      try {
        const stream = await streamService.get(id)
        requestedStreamSuccess(stream)
      } catch (error) {
        requestedStreamError(error)
      }
    }
    getStream()
  }, [id, requestedStream, requestedStreamError, requestedStreamSuccess])
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>{streams.items[id] ? streams.items[id].name : '...'}</div>
      <MessageInput onChange={onChange} onSubmit={onSubmit} />
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

const mapStateToProps = ({ forms, streams }) => ({
  forms,
  streams,
})

export default connect(
  mapStateToProps,
  {
    requestedStream,
    requestedStreamSuccess,
    requestedStreamError,
    changedMessageInput,
    requestedNewMessage,
    requestedNewMessageSuccess,
    requestedNewMessageError,
  }
)(View)
