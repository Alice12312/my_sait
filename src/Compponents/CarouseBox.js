import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg1 from '../kartinki/1.png'
import forestImg2 from '../kartinki/2.png'
import forestImg3 from '../kartinki/3.png'
import forestImg4 from '../kartinki/4.png'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg1}
            alt="Forest"
            style={{ maxWidth: '100%', height: '630' }}
          />
          <Carousel.Caption>
            <h3>Почему мы?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg2}
            alt="Forest"
            style={{ maxWidth: '100%', height: '630' }}
          />
          <Carousel.Caption>
            <h3>
              Интерактивные тренажеры и система для иммерсивных сайкл тренировок
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg3}
            alt="Forest"
            style={{ maxWidth: '100%', height: '630' }}
          />
          <Carousel.Caption>
            <h3>Большое разнообразие групповых программ фитнеса</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg4}
            alt="Forest"
            style={{ maxWidth: '100%', height: '630' }}
          />
          <Carousel.Caption>
            <h3>Классифицированный и многочисленный тренерский состав</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
