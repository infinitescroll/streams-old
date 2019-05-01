import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changedInput } from '../store/actions'

const Input = ({ onChange, type, name, controlLabel, value, checked }) => {
  return (
    <div>
      <FormLabel>{controlLabel}</FormLabel>
      <FormControl
        type={type || 'Text'}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default connect(
  null,
  { changedInput }
)(Input)
