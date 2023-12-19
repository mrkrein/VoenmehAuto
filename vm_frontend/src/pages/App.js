import logo from '../logo.svg';
import mt_trs from '../mt_trs.jpeg'
import at_trs from '../at_trs.jpeg'
import '../App.css';
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";
import { useContext } from "react";


function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      {/* Header component */ }
      <header className="header">
        <div className="container mx-auto">
          <div className="header-wrp">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="header-menu" 
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <ul className="menu-nav">
                <li><a href={`/`}>Главная</a></li>
                <li><a href={`/documents`}>Документы</a></li>
                <li><a href={`/price`}>Цены</a></li>
                <li><a href={`/contacts`}>Контакты</a></li>
                <li><a href={`/reviews`}>Отзывы</a></li>
              </ul>
              <a href={`/login`} className="auth-btn">Личный кабинет</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main component */ }
      <main>
        {/* Hero Section */ }
        <section className="hero">
          <div className="container mx-auto">
            <div className="hero-wrp">
              <div className="hero-left">
                <div className="hero-text">
                  <p>ВОЕНМЕХАВТО Лучшая автошкола в Санкт-петербурге</p>
                </div>
                <button className="hero-btn" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Хочу получить права</button>
              </div>
              <div className="hero-right">
                <img src='/background.png' className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </section>

        {/* Groups Section */ }
        <section className="groups">
          <div className="container mx-auto">
            <div className="groups-wrp">
              <div className="groups-title">Идет набор в группы</div>
              <div className="groups-description">
                <p>
                  Успей записаться в вечернюю группу, пока есть свободные места.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transmittion Section */ }
        <section className="transmittion">
          <div className="container mx-auto">
              <div className="transmt-wrp">
                <div className="sec-title">Мы обучаем на все трансмиссии</div>
                <div className="trs-content">
                  <div className="left-content">
                    <div className="left-content-wrp">
                      <div className="trs-title">Механика</div>
                      <div className="trs-price">от 52т.р.</div>
                      <div className="trs-description">
                        <p>
                          Основные преймущества механической коробки передач (МКПП) - простота конструкции и возможность контролировать процесс переключения на все 100%
                        </p>
                      </div>
                    </div>
                    <img src={mt_trs} alt="Mechanical transmittion" />
                  </div>
                  <div className="right-content">
                    <div className="trs-title-v">Автомат</div>
                    <img src={at_trs} alt="Automatical transmittion" />
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Steps Section */ }
        <section className="steps">
          <div className="container mx-auto">
            <div className="steps-wrp">
              <div className="sec-title">Простые шаги на пути водителя</div>
              <div className="steps-grd-wrp">
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Оставьте заявку</div>
                    <div className="card-desc">Позвоните нам или оставьте заявку по почте</div>
                    <div className="card-num">01</div>
                  </div>
                </div>
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Заключите договор</div>
                    <div className="card-desc">Наш менеджер уточнит данные, чтобы заключить договор</div>
                    <div className="card-num">02</div>
                  </div>
                </div>
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Посетите занятие</div>
                    <div className="card-desc">Приходите на первое занятие по теории</div>
                    <div className="card-num">03</div>
                  </div>
                </div>
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Практика вождения</div>
                    <div className="card-desc">Приступайте к практике вождения</div>
                    <div className="card-num">04</div>
                  </div>
                </div>
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Сдайте экзамен</div>
                    <div className="card-desc">Через 2 месяца сдайте экзамен в ГИБДД</div>
                    <div className="card-num">05</div>
                  </div>
                </div>
                {/* Step Сard */ }
                <div className="step-card">
                  <div className="card-body">
                    <div className="card-title">Поздравляем!</div>
                    <div className="card-desc">Теперь вы настоящий водитель</div>
                    <div className="card-num">06</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teatchers Section */ }
        <section className="teatchers">
          <div className="container mx-auto">
            <div className="teatchers-wrp">
              <div className="sec-title">Преподаватели и инструкторы</div>
              <div className="teatchers-grd-wrp">
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/sergey_andreevich.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Сергей Андреевич</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/pavel.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Павел</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/sergey_valeryvich.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Сергей Валерьевич</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/vyacheslav.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Вячеслав</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/andrey.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Андрей</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
                <div className="teatchers-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/vitaly.png" alt="Automatical transmittion" />
                    </div>
                    <div className="card-right">
                      <div className="card-title">Виталий</div>
                      <div className="card-desc">позвоните нам или оставьте заявку по почте</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */ }
        <section className="reviews">
          <div className="container mx-auto">
            <div className="reviews-wrp">
              <div className="sec-title">Отзывы</div>
            </div>
          </div>
        </section>

        {/* User-reg Section */ }
        <section className="user-reg">
          <div className="container mx-auto">
            <div className="user-reg-wrp">
              <div className="sec-title">Оставьте вашу заявку</div>
            </div>
          </div>
        </section>

        {/* Contact Section */ }
        <section className="contact">
          <div className="container mx-auto">
            <div className="contact-wrp">
              <div className="con-left">
                <div className="con-text">Осталось<span> 5 </span>мест</div>
              </div>
              <div className="con-right">
                <form>
                  <div className="con-form-title">Запишись</div>
                  <label from="name">Имя</label>
                  <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                  <label from="phone">Телефон</label>
                  <input type="tel" id="phone" name="phone" required minlength="4"  size="10" />
                  <label from="mail">E-mail</label>
                  <input type="email" id="mail" name="mail" required minlength="4" maxlength="25" size="10" />
                  <button type="submit" className="btn w-full mt-10">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer component */ }
      <footer>
        <div className="container mx-auto">
          <div className="footer-wrp">
            <div className="footer-copy">&copy; 2023 - 2024 <a href="https://vk.com/body4_drift" target="_blank" rel="noreferrer">b4tech</a></div>
            <div className="footer-menu">
              <ul className="menu-nav">
                <li><a href="/">Главная</a></li>
                <li><a href="/">Документы</a></li>
                <li><a href="/">Цены</a></li>
                <li><a href="/">Контакты</a></li>
                <li><a href="/">Отзывы</a></li>
              </ul>
            </div>
            <div className="footer-btn">
              <button className="btn">Позвонить</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
