import React, { useState } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Button, Container, Form, FormLabel } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch'

import {
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
} from '../../store/actions'
import { useStreams } from '../../hooks'
import { streamService } from '../../lib/streamService'
import { GITHUB_CLIENT_ID } from '../../secrets'

const Invite = ({
  streams,
  profile,
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
  code,
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState('')
  useStreams(
    profile.id,
    requestedStreams,
    requestedStreamsSuccess,
    requestedStreamsError
  )
  return (
    <Container>
      <FormLabel>Streams</FormLabel>
      {Object.keys(streams.items).map(id => (
        <Form.Check
          key={id}
          type="checkbox"
          value={id}
          label={streams.items[id].name}
          name={id}
          onChange={e => setSelectedStreamId(e.target.value)}
          checked={id === selectedStreamId}
        />
      ))}
      <Button
        disabled={!selectedStreamId}
        onClick={async () => {
          await streamService.invite(
            selectedStreamId,
            profile.id,
            'P9JuHCGD8y8aFQYnLdbCMH1eK68VPK4HsLZC8akofmYKXFwk'
          )
        }}
      >
        Invite
      </Button>
      <Button
        onClick={async () => {
          Router.push(
            `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo user`
          )
        }}
      >
        Auth with github
      </Button>
      <Button
        onClick={async () => {
          const streamId =
            '12D3KooWNutEVpx3Pd3DU1FuvJnfsgPDB2kRrSXnQjAWfoPP7FBw'
          await streamService.addWebhook(streamId)
        }}
      >
        Register webhook
      </Button>
      <Button
        onClick={async () => {
          const streamId =
            '12D3KooWNutEVpx3Pd3DU1FuvJnfsgPDB2kRrSXnQjAWfoPP7FBw'
          await fetch(
            `http://localhost:3001/api/v0/auth/github/callback?code=${code}&streamId=${streamId}`
          )
        }}
      >
        Store access token
      </Button>
    </Container>
  )
}

Invite.getInitialProps = ({ query: { code } }) => {
  // if (code) {
  //   console.log('DOING THIS')
  //   fetch(
  //     `http://localhost:3001/api/v0/auth/github/callback?code=${code}&streamId=123`
  //   )
  // }
  return { code }
}

Invite.propTypes = {
  streams: PropTypes.object,
  profile: PropTypes.object,
  requestedStreams: PropTypes.func.isRequired,
  requestedStreamsSuccess: PropTypes.func.isRequired,
  requestedStreamsError: PropTypes.func.isRequired,
}

const mapStateToProps = ({ streams, profile }) => ({
  streams,
  profile,
})

export default connect(
  mapStateToProps,
  {
    requestedStreams,
    requestedStreamsSuccess,
    requestedStreamsError,
  }
)(Invite)
