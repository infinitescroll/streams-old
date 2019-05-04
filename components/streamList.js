import { Row, Col, Card } from 'react-bootstrap'
import React, { Fragment } from 'react'
import Link from 'next/link'

const StreamList = ({ streams }) => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          {!!streams &&
            Object.keys(streams).map((id, index) => {
              return (
                <Link href={'/streams/' + id} key={id}>
                  <a>
                    <Card>{streams[id].name}</Card>
                  </a>
                </Link>
              )
            })}
        </Col>
      </Row>
    </Fragment>
  )
}

export default StreamList
