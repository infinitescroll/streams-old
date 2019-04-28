import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import { Col } from "react-bootstrap";
import { ThreadList } from "../components/";
import {
  requestingThreads,
  requestedThreadsSuccess,
  requestedThreadsError
} from "../store/actions";
import { textile } from "../textile";

import "../styles/index.scss";

const Home = ({
  requestingThreads,
  requestedThreadsSuccess,
  requestedThreadsError,
  profile,
  threads
}) => {
  useEffect(() => {
    const loadThreads = async () => {
      requestingThreads(profile.id);
      try {
        const threadsList = await textile.threads.list();
        requestedThreadsSuccess(threadsList);
      } catch (error) {
        requestedThreadsError(error);
      }
    };

    loadThreads();
  }, []);

  return (
    <Fragment>
      <h3>Streams</h3>
      <ThreadList threads={threads.items} />
    </Fragment>
  );
};

const mapStateToProps = ({ threads, profile }) => ({
  threads,
  profile
});

export default connect(
  mapStateToProps,
  {
    requestingThreads,
    requestedThreadsSuccess,
    requestedThreadsError
  }
)(Home);
