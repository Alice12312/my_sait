import React, { Component } from 'react'
import './style.scss'
import CarouseBox from '../../Compponents/CarouseBox'
import { Container, Row, Col } from 'react-bootstrap'
import mativation from './mativation.png'
import image10 from './image 10.png'
import image8 from './image 9.png'
import image9 from './image 8.png'

export default class HomePage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <CarouseBox />
        <div className="GYMSTRONG" style={{ marginTop: '100px' }}>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <img
                    src={mativation}
                    width="400"
                    height="400"
                    alt="Motivation"
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-3 text-center">
                  <h3>
                    Лучшее
                    <br /> упражнение-это то,
                    <br />
                    которое вы <br />
                    действительно <br />
                    делаете каждый <br></br>
                    день.
                  </h3>
                  <button className="btn btn-primary">Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row style={{ background: '#F8F8F8', marginTop: '15px' }}>
          <Col xs={12} md={6}>
            <div>
              <h1
                className="text-danger text-center"
                style={{
                  marginTop: '100px',
                  marginLeft: '19px',
                  fontSize: '70px',
                }}
              >
                Почему мы?
              </h1>
              <h4 className="text-center">
                GYMSTRONG — это уникальный фитнес-клуб, в<br />
                котором есть все для занятий спортом и<br />
                полезного отдыха всей семьей
              </h4>

              <ul
                style={{ marginLeft: '19px', marginTop: '20px' }}
                className="border"
              >
                <li
                  className="text-start"
                  style={{ marginBottom: '10px', fontSize: '14px' }}
                >
                  Интерактивные тренажеры и система для иммерсивных сайкл
                  тренировок
                </li>
                <li
                  className="text-start"
                  style={{ marginBottom: '10px', fontSize: '14px' }}
                >
                  Большое разнообразие групповых программ фитнеса
                </li>
                <li
                  className="text-start"
                  style={{ marginBottom: '10px', fontSize: '14px' }}
                >
                  Классифицированный и многочисленный тренерский состав
                </li>
                <li
                  className="text-start"
                  style={{ marginBottom: '10px', fontSize: '14px' }}
                >
                  Оздоровительный банный комплекс с теплым бассейном
                </li>
                <li
                  className="text-start"
                  style={{ marginBottom: '10px', fontSize: '14px' }}
                >
                  Полезная еда для детей и взрослых
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-3 text-end">
              <img
                src="/images/Rectangle 7 (2).png"
                className="img-fluid"
                style={{
                  marginBottom: '5px',
                  marginRight: '30px',
                  marginTop: '20px',
                }}
              />
              <img
                src="/images/disabled-woman-training-gym-rehabilitation-center 1 (2).png"
                className="img-fluid"
                style={{
                  marginRight: '30px',
                }}
              />
            </div>
          </Col>
        </Row>

        <div>
          <h2
            className="text-end"
            style={{ marginTop: '85px', marginRight: '30px' }}
          >
            ПОЛУЧИ ПРОПУСК В МИР БЕЗГРАНИЧНЫХ ВОЗМОЖНОСТЕЙ<br></br> ФИТНЕСА И НЕ
            УПУСТИ <span className="text-danger">АКЦИИ И СКИДКИ</span>
          </h2>

          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <div className="p-3">
                <img src={image9} width="351" height="516" alt="Image 9" />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <img src={image8} width="344" height="516" alt="Image 8" />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <img src={image10} width="326" height="516" alt="Image 10" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '85px' }}></div>
        <div className="row gx-5" style={{ background: '#F8F8F8' }}>
          <div className="col">
            <div className="p-3">
              <h2 style={{ marginTop: '10px' }}>Присоединяйтесь к нам</h2>
              <h3 style={{ marginTop: '35px' }}>Контакты</h3>
              <div style={{ marginTop: '25px' }}>
                <h3>Адрес</h3>
                <h4 style={{ marginTop: '5px' }}>
                  г. Барнаул, ул. Сухэ-Батора, 37
                </h4>
                <h3 style={{ marginTop: '5px' }}>Телефон</h3>
                <h4 style={{ marginTop: '5px' }}>+7 (962) 804-96-74</h4>
                <h3 style={{ marginTop: '5px' }}>E-mail</h3>
                <h4 style={{ marginTop: '5px' }}>gymstrong@mail.ru</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A09c6901f6fb959501ce89aa07da3f80f02d3a53ab4b6275138f5d09c96f935a3&amp;source=constructor"
                width="600"
                height="400"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
