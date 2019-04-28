import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
} from '../store/actions'
import { textile } from '../textile'
import '../styles/index.scss'
import { Input, ThreadList } from '../components/'

const Streams = ({
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
  profile,
  forms,
}) => {
  const createThread = async () => {
    requestingNewThread(profile.id)
    try {
      const newThread = await textile.threads.add(forms.newThread)
      requestedNewThreadSuccess(profile.id, newThread)
    } catch (error) {
      requestedNewThreadError(profile.id, error)
    }
  }
  return (
    <Row className="custom-container">
      <Col lg={8} lgoffset={4}>
        <Input controlLabel="New Thread" name="newThread" />
      </Col>
      <Col lg={4}>
        <Button onClick={createThread}>Add</Button>
      </Col>
      <ThreadList />
    </Row>
  )
}

Streams.propTypes = {
  requestingNewThread: PropTypes.func.isRequired,
  requestedNewThreadSuccess: PropTypes.func.isRequired,
  requestedNewThreadError: PropTypes.func.isRequired,
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
    requestingNewThread,
    requestedNewThreadSuccess,
    requestedNewThreadError,
  }
)(Streams)
