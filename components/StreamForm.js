import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../styles/index.scss'
import { Input } from '../components/'

const StreamForm = ({
  changedStreamInput,
  onSubmit,
  title,
  buttonText,
  forms,
}) => {
  const onChange = e => {
    changedStreamInput(e.target.name, e.target.value)
  }
  const onChangeCheckbox = e => {
    const value =
      forms.stream[e.target.name] === e.target.value ? '' : e.target.value
    changedStreamInput(e.target.name, value)
  }
  return (
    <Row className="custom-container">
      <Col lg={8} lgoffset={4}>
        <h2>{title}</h2>
      </Col>
      <Col lg={8} lgoffset={4}>
        <Input
          controlLabel="Name"
          onChange={onChange}
          name="name"
          value={forms.stream.name}
        />
      </Col>
      <Col lg={8} lgoffset={4}>
        <h4>Privacy</h4>
        <Input
          controlLabel="Private"
          onChange={onChangeCheckbox}
          name="type"
          type="checkbox"
          value="private"
          checked={forms.stream.type === 'private'}
        />
        <Input
          controlLabel="Open"
          onChange={onChangeCheckbox}
          name="type"
          type="checkbox"
          value="open"
          checked={forms.stream.type === 'open'}
        />
        <Input
          controlLabel="Public"
          onChange={onChangeCheckbox}
          name="type"
          type="checkbox"
          value="public"
          checked={forms.stream.type === 'public'}
        />
      </Col>
      <Col lg={8} lgoffset={4}>
        <h4>Sharing</h4>
        <Input
          controlLabel="Not Shared"
          onChange={onChangeCheckbox}
          name="sharing"
          type="checkbox"
          value="not_shared"
          checked={forms.stream.sharing === 'not_shared'}
        />
        <Input
          controlLabel="Invite Only"
          onChange={onChangeCheckbox}
          name="sharing"
          type="checkbox"
          value="invite_only"
          checked={forms.stream.sharing === 'invite_only'}
        />
        <Input
          controlLabel="Shared"
          onChange={onChangeCheckbox}
          name="sharing"
          type="checkbox"
          value="shared"
          checked={forms.stream.sharing === 'shared'}
        />
      </Col>
      <Col lg={8} lgoffset={4}>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </Col>
    </Row>
  )
}

StreamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changedStreamInput: PropTypes.func.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string,
}

StreamForm.defaultProps = {
  title: '',
  buttonText: 'Submit',
}

export default StreamForm
