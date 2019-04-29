import { Row, Col, Card } from 'react-bootstrap'
import React, { Fragment } from 'react'

const StreamList = ({ streams }) => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          {!!streams &&
            Object.keys(streams).map((id, index) => {
              return (
                <Card key={id}>
                  <div>{streams[id].name}</div>
                </Card>
              )
            })}
        </Col>
      </Row>
    </Fragment>
  )
}

export default StreamList
