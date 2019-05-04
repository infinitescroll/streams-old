import React from 'react'
import { FormControl, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MessageInput = ({ onChange, onSubmit, value }) => {
  return (
    <div>
      <FormControl value={value} onChange={onChange} />
      <Button onClick={onSubmit}>Create</Button>
    </div>
  )
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default MessageInput
