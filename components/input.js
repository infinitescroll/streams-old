import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changedInput } from '../store/actions'

const Input = ({ changedInput, name, disabled, controlLabel, val, type }) => {
  const onChange = async e => {
    changedInput(name, e.target.value)
  }
  return (
    <div>
      <FormGroup controlId="formBasicText">
        <FormControl
          disabled={disabled}
          type={type || 'Text'}
          placeholder={controlLabel}
          onChange={onChange}
          value={val}
        />
      </FormGroup>
    </div>
  )
}

Input.propTypes = {
  changedInput: PropTypes.func.isRequired,
}

export default connect(
  null,
  { changedInput }
)(Input)
