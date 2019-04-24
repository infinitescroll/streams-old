import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError
} from "../store/actions";
import { textile } from "../textile";
import "../styles/index.scss";
import Input from "../components/input";

const Streams = ({
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
  profile,
  thread
}) => {
  const createThread = async () => {
    requestingNewThread(profile.id);
    try {
      console.log("thread", thread);
      const newThread = await textile.threads.add(thread.newThread);
      requestedNewThreadSuccess(profile.id, newThread);
    } catch (error) {
      requestedNewThreadError(profile.id, error);
    }
  };
  return (
    <div>
      <Row>
        <Col lg={8} lgoffset={4}>
          <Input
            controlLabel="New Thread"
            type="Text"
            title="thread"
            name="newThread"
          />
        </Col>
        <Col lg={8} lgoffset={4}>
          <Button onClick={createThread}>Add</Button>
        </Col>
      </Row>
    </div>
  );
};

Streams.propTypes = {
  peers: PropTypes.object.isRequired,
  requestingNewThread: PropTypes.func.isRequired,
  requestedNewThreadSuccess: PropTypes.func.isRequired,
  requestedNewThreadError: PropTypes.func.isRequired,
  profile: PropTypes.object
};

Streams.defaultProps = {
  profile: {}
};

const mapStateToProps = ({ peers, profile, thread }) => ({
  peers,
  profile,
  thread
});

export default connect(
  mapStateToProps,
  {
    requestingNewThread,
    requestedNewThreadSuccess,
    requestedNewThreadError
  }
)(Streams);
