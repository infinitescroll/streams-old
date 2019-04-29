import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
} from '../store/actions'
import { textile } from '../textile'
import '../styles/index.scss'
import { Input, StreamList } from '../components/'

const Streams = ({
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
  profile,
  forms,
}) => {
  const createStream = async () => {
    requestedNewStream(profile.id)
    try {
      const newStream = await textile.threads.add(forms.newStream)
      requestedNewStreamSuccess(profile.id, newStream)
    } catch (error) {
      requestedNewStreamError(profile.id, error)
    }
  }
  return (
    <Row className="custom-container">
      <Col lg={8} lgoffset={4}>
        <Input controlLabel="New Stream" name="newStream" />
      </Col>
      <Col lg={4}>
        <Button onClick={createStream}>Add</Button>
      </Col>
      <StreamList />
    </Row>
  )
}

Streams.propTypes = {
  requestedNewStream: PropTypes.func.isRequired,
  requestedNewStreamSuccess: PropTypes.func.isRequired,
  requestedNewStreamError: PropTypes.func.isRequired,
  profile: PropTypes.object,
}

Streams.defaultProps = {
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
)(Streams)
