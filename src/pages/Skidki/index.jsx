import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './style.scss'

export default class KatalogPage extends Component {
  render() {
    return (
      <Container fluid className="p-0">
        <div className={'tovars'}>
          <div className={'tovar'}>
            <img className={'t1'} src={'/images/Stretching.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    Stretching (классическая <br></br>растяжка) — это
                    тренировка,<br></br>
                    направленная на развитие<br></br> гибкости тела, увеличение
                    <br></br>
                    эластичности мышц и<br></br> подвижности суставов.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={'tovar'}>
            <img className={'t2'} src={'/images/аэростретчинг.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    Аэростретчинг – это тренировка <br></br>на подвесных
                    полотнах в виде<br></br>
                    гамака. Оно проходит в <br></br>невесомости – это снимает
                    <br></br> нагрузку с позвоночника и<br></br> развивает
                    координацию.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={'tovar'}>
            <img className={'t3'} src={'/images/Степ-аэробика.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    Степ-аэробика — это вид <br></br>кардиотренировки на основе
                    <br></br>
                    танцевальных движений,<br></br> выполняемых с помощью степ-
                    <br></br>платформы.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={'tovar'}>
            <img className={'t4'} src={'/images/Bosu.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    BOSU-тренинг — это тренировка<br></br> с помощью
                    специального<br></br>
                    тренажера - полусфера с<br></br> жестким основанием, которая
                    <br></br> похожа на половина мяча для<br></br> фитбола.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={'tovar'}>
            <img className={'t5'} src={'/images/image 20.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    Силовая тренировка – это<br></br> комплекс специальных
                    <br></br> упражнений с постоянным <br></br>увеличением
                    весовой нагрузки,<br></br> направленный на укрепление
                    <br></br> опорно-двигательной системы.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={'tovar'}>
            <img className={'t6'} src={'/images/ТРX.png'} alt="" />
            <table>
              <tbody>
                <tr>
                  <td>
                    TRX-тренировки – это формат <br></br>упражнений, которые{' '}
                    <br></br>выполняются со свободным весом <br></br>
                    (собственным) на специальных<br></br> стропах с петлями.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    )
  }
}
