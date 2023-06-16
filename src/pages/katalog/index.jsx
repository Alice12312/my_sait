import './style.scss'
import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
export default class SkidkiPage extends Component {
  render() {
    return (
      <Container luid className="p-0" style={{ overflowX: 'hidden' }}>
        <div style={{ marginTop: '5px' }}></div>
        <Row className="gx-5">
          <Col>
            <div className="p-3">
              <h2
                className="text-danger"
                style={{ marginTop: '10px', marginBottom: '20px' }}
              >
                АКЦИИ И СКИДКИ
              </h2>
              <Row>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 17.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 18.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 8 (1).png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 10 (1).png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 35.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/image 9 (1).png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <h2 className="text-danger" style={{ marginTop: '10px' }}>
          ОСНОВНЫЕ КАРТЫ
        </h2>

        <div className="karti">
          <ButtonGroup className="d-flex flex-wrap">
            <Button className="btn1">Полный день</Button>
            <Button className="btn1">Дневная</Button>
            <Button className="btn1">Семейная</Button>
            <Button className="btn1">Полугодовая</Button>
            <Button className="btn1">Вечерняя</Button>
          </ButtonGroup>
        </div>
        <img
          src="/images/image 19.png"
          className="img-fluid"
          style={{ marginTop: '10px' }}
        />
      </Container>
    )
  }
}
