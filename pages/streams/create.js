import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
} from '../../store/actions'
import { streamService } from '../../lib/streamService.js'
import { StreamForm } from '../../components'

const CreateStream = ({
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
  profile,
  forms,
}) => {
  const createStream = async () => {
    requestedNewStream(profile.id)
    try {
      const newStream = await streamService.create()
      console.log('newStream', newStream)
      requestedNewStreamSuccess(profile.id, newStream)
    } catch (error) {
      requestedNewStreamError(profile.id, error)
    }
  }
  return (
    <Row className="custom-container">
      <StreamForm
        onSubmit={createStream}
        title="Create Stream"
        buttonText="Create"
      />
    </Row>
  )
}

CreateStream.propTypes = {
  requestedNewStream: PropTypes.func.isRequired,
  requestedNewStreamSuccess: PropTypes.func.isRequired,
  requestedNewStreamError: PropTypes.func.isRequired,
  profile: PropTypes.object,
}

CreateStream.defaultProps = {
  profile: {},
}

const mapStateToProps = ({ peers, profile, forms }) => ({
  peers,
  profile,
  forms,
})

export default connect(
  mapStateToProps,
  {
    requestedNewStream,
    requestedNewStreamSuccess,
    requestedNewStreamError,
  }
)(CreateStream)
