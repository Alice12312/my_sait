import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class ONasPage extends Component {
  render() {
    return (
      <Container
        fluid
        className="p-0"
        style={{ overflowX: 'hidden', background: '#F8F8F8' }}
      >
        <div style={{ marginTop: '85px', background: '#F8F8F8' }}>
          <h1 className="text-danger text-center">
            НАША МИССИЯ - СДЕЛАТЬ СПОРТ ДОСТУПНЫМ КАЖДОМУ
          </h1>
          <h2 className="text-center">
            Здоровый образ жизни, здоровое и красивое тело и <br></br>активный
            отдых уже давно задают тренды<br></br> обществу. Но, зачастую, у
            всех нас либо не хватает<br></br> времени, либо в семейный бюджет не
            вписывается<br></br> строчка о спорт-клубе. Поэтому наша сеть
            <br></br>
            предлагает всем желающим современные,<br></br> качественное{' '}
            оснащенные фитнес клубы, с <br></br>действительно народным ценами,{' '}
            где можно<br></br> заниматься в любое, удобное для вас время!
          </h2>
        </div>
        <div
          className="row gx-5 "
          style={{
            marginTop: '85px',
            backgroundImage: `url('../images/Vector (1).png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="col-lg-6">
            <div className="p-3">
              <h2 className="text-center">
                <span className="text-danger">
                  Как появилась сеть <br></br>GYMSTRONG?<br></br>
                </span>
                GYMSTRONG – сравнительно<br></br> молодая, но, уже завоевавшая
                <br></br>
                признание тысяч клиентов, сеть<br></br> спортивных клубов.{' '}
                <br></br>Первый клуб был открыт в 2015<br></br>году в городе
                Москва.<br></br> Останавливаться на одном зале<br></br> мы не
                стали и начали активно <br></br>расширять охват. Сейчас сеть{' '}
                <br></br>присутствует в 20 городах и насчитывает порядка 45
                клубов.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3 text-center">
              <img
                src="../images/man.png"
                className="float-left"
                width="444"
                height="616"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="p-3">
              <img src="../images/image 31.png" className="img31" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3 text-center">
              <h2 className="text-center">
                GYMSTRONG основан людьми,<br></br> знающими толк в спортивных
                <br></br>
                тренировках, поэтому экономия на<br></br> оборудовании – это не
                про нас.<br></br>
                Качественное оборудование – важная<br></br> часть успешных
                тренировок.<br></br> Тренажерный зал, оснащенный всем <br></br>{' '}
                необходимым современным <br></br> оборудованием, поможет в общем
                укреплении Вашего здоровья,<br></br> коррекции фигуры и снятии
                <br></br> стресса. Помимо укрепления сердечно-<br></br>
                сосудистой системы Вы приобретете <br></br>стройную, красивую
                фигуру и огромный<br></br> заряд энергии на целый день. А что
                <br></br> может быть лучше красивого тела в <br></br>сочетании с
                бодростью духа?
              </h2>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
