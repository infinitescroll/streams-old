import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { textile } from '../../textile'
import {
  requestingProfile,
  requestedProfileSuccess,
  requestedProfileError,
} from '../../store/actions'

const ValidateTextile = props => {
  const {
    requestingProfile,
    requestedProfileSuccess,
    requestedProfileError,
  } = props
  useEffect(() => {
    const getProfile = async () => {
      requestingProfile()
      try {
        const textileProfile = await textile.profile.get()
        requestedProfileSuccess(textileProfile)
      } catch (error) {
        requestedProfileError(error)
      }
    }

    getProfile()
  }, [requestingProfile, requestedProfileSuccess, requestedProfileError])

  if (!props.profile.id && props.profile.requested)
    console.log('TEXTILE NODE PROBABLY NOT RUNNING')

  return <Fragment>{props.children}</Fragment>
}

ValidateTextile.propTypes = {
  children: PropTypes.node.isRequired,
  requestingProfile: PropTypes.func.isRequired,
  requestedProfileSuccess: PropTypes.func.isRequired,
  requestedProfileError: PropTypes.func.isRequired,
  profile: PropTypes.object,
}

ValidateTextile.defaultProps = {
  profile: {},
}

const mapStateToProps = ({ profile }) => ({
  profile,
})

export default connect(
  mapStateToProps,
  { requestingProfile, requestedProfileSuccess, requestedProfileError }
)(ValidateTextile)
