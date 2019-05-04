import React, { useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestedMessage,
  requestedMessageSuccess,
  requestedMessageError,
} from '../../../store/actions'
import { streamService } from '../../../lib/streamService.js'

const View = ({
  requestedMessage,
  requestedMessageSuccess,
  requestedMessageError,
  streamId,
  messageId,
  messages,
}) => {
  useEffect(() => {
    const getStream = async () => {
      requestedMessage()
      try {
        const message = await streamService.getMessage(messageId)
        requestedMessageSuccess(message)
      } catch (error) {
        requestedMessageError(error)
      }
    }
    getStream()
  }, [
    streamId,
    messageId,
    requestedMessage,
    requestedMessageError,
    requestedMessageSuccess,
  ])
  return (
    <div>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
      <h4>
        <Link href={'/streams/' + streamId}>
          <a>{streamId}</a>
        </Link>
        / {messageId}
      </h4>
      <div>{messages.items[messageId] && messages.items[messageId].body}</div>
    </div>
  )
}

View.getInitialProps = ({ query: { messageId, streamId } }) => {
  return { messageId, streamId }
}

View.propTypes = {
  requestedMessage: PropTypes.func.isRequired,
  requestedMessageSuccess: PropTypes.func.isRequired,
  requestedMessageError: PropTypes.func.isRequired,
}

View.defaultProps = {
  profile: {},
}

const mapStateToProps = ({ streams, messages }) => ({
  streams,
  messages,
})

export default connect(
  mapStateToProps,
  {
    requestedMessage,
    requestedMessageSuccess,
    requestedMessageError,
  }
)(View)
