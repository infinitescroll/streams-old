import { Row, Col, Card } from 'react-bootstrap'

export default ({ threads }) => {
  return (
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
  )
}
