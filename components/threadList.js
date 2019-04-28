import { Row, Col, Card } from 'react-bootstrap'
import React, { Fragment } from 'react'

const ThreadsList = ({ threads }) => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          {Object.keys(threads).map((id, index) => {
            return (
              <Card key={id}>
                <div>{threads[id].name}</div>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Fragment>
  )
}

export default ThreadsList
