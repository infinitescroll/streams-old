import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  changedStreamInput,
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
} from '../../store/actions'
import { streamService } from '../../lib/streamService.js'
import { StreamForm } from '../../components'

const CreateStream = ({
  changedStreamInput,
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
  profile,
  forms,
}) => {
  const createStream = async () => {
    requestedNewStream(profile.id)
    try {
      const stream = await streamService.create(forms.stream)
      requestedNewStreamSuccess(profile.id, stream)
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
        forms={forms}
        changedStreamInput={changedStreamInput}
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
    changedStreamInput,
    requestedNewStream,
    requestedNewStreamSuccess,
    requestedNewStreamError,
  }
)(CreateStream)
