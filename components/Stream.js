import { Row, Col, Card } from 'react-bootstrap'
import React, { Fragment } from 'react'

const Stream = ({ stream }) => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <div>{stream[id].name}</div>
          </Card>
          {!!stream.blocks &&
            Object.keys(stream.blocks).map((id, _) => {
              return (
                <Card key={id}>
                  <div>block {id}</div>
                </Card>
              )
            })}
        </Col>
      </Row>
    </Fragment>
  )
}

export default Stream
