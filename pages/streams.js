import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError
} from "../store/actions";
import { textile } from "../textile";
import "../styles/index.scss";

const Streams = ({
  requestingNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
  profile
}) => {
  const createThread = async () => {
    requestingNewThread(profile.id);
    try {
      const thread = await textile.threads.add("new new");
      requestedNewThreadSuccess(profile.id, thread);
    } catch (error) {
      requestedNewThreadError(profile.id, error);
    }
  };
  return (
    <div>
      <button onClick={createThread}>add thread</button>
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

const mapStateToProps = ({ peers, profile }) => ({
  peers,
  profile
});

export default connect(
  mapStateToProps,
  {
    requestingNewThread,
    requestedNewThreadSuccess,
    requestedNewThreadError
  }
)(Streams);
