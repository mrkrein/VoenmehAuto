import { Helmet } from "react-helmet"
import logo from '../../logo.svg';

export default function UserExam() {
    return (
        <div id="exam" className="cursor-auto">
            <Helmet>
                <title>VM | Экзамен</title>
            </Helmet>
            <section class="container mx-auto">
                <div className="flex justify-between mt-8">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="flex space-x-20">
                        <ul className="flex space-x-8 font-medium">
                            <li><a href='/'>Мой прогресс</a></li>
                            <li><a href='/'>Мои ошибки</a></li>
                            <li><a href='/'>Избранные вопросы</a></li>
                        </ul>
                        <a href='/' className="font-medium">Богдан</a>
                    </div>
                </div>
              
                <div className="">
                    <div className="">
                        <h1 className="text-4xl font-bold mt-10 max-w-7xl">Экзамен ПДД онлайн категория «B».</h1>
                        <div className="exam-block">
                            <div className="exam-timer">
                                <ion-icon name="time-outline"></ion-icon>
                                <div className="timer-time">20:00</div>
                            </div>
                            <div className="exam-questions">
                                <div className="exam-question">1</div>
                                <div className="exam-question">2</div>
                                <div className="exam-question">3</div>
                                <div className="exam-question">4</div>
                                <div className="exam-question">5</div>
                                <div className="exam-question">6</div>
                                <div className="exam-question">7</div>
                                <div className="exam-question">8</div>
                                <div className="exam-question">9</div>
                                <div className="exam-question">10</div>
                                <div className="exam-question">11</div>
                                <div className="exam-question">12</div>
                                <div className="exam-question">13</div>
                                <div className="exam-question">14</div>
                                <div className="exam-question">15</div>
                                <div className="exam-question">16</div>
                                <div className="exam-question">17</div>
                                <div className="exam-question">18</div>
                                <div className="exam-question">19</div>
                                <div className="exam-question">20</div>
                            </div>
                            <div className="exam-ticket">
                                <div className="ticket-title">Вопрос 1</div>
                                <div className="ticket-img">
                                    <img src="/ticket1.jpg" />
                                </div>
                                <div className="ticket-question">Сколько полос для движения имеет данная дорога?</div>
                                <div className="ticket-answers">
                                    <div className="ticket-answer">Две</div>
                                    <div className="ticket-answer">Четыре</div>
                                    <div className="ticket-answer">Пять</div>
                                </div>
                                <div className="ticket-bottom">
                                    <div className="ticket-skip">Пропустить</div>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
}