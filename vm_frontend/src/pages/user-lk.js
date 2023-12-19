import { Helmet } from "react-helmet"
import logo from '../logo.svg';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function UserLK() {
    return (
        <div id="lk" className="cursor-auto">
            <Helmet>
                <title>VM | Личный кабинет</title>
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
                        <h1 className="text-4xl font-bold mt-10 max-w-7xl">ПДД 2023: Правила дорожного движения онлайн экзамен и билеты как в ГИБДД, ГАИ РФ</h1>
                        <div id="VIDEOKURS" className="bg-yellow-50 flex justify-between rounded-lg p-12 mt-10">
                            <div className="">
                                <h4 className="text-4xl font-bold mb-4">Бесплатный видеокурс ПДД</h4>
                                <p className="text-2xl font-medium mb-10">Продолжай учится, не выходя из дома</p>
                                <a href='/' className="rounded-lg inline-block text-center py-4 px-8 bg-blue-500 text-white">Пройти обучение</a>
                            </div>
                            <div className="">
                                <img src="https://c.rdrom.ru/pdd/dromysh_pdd_onlineschool.svg?v=1" />
                            </div>
                        </div>
                        <div id="TICKETS" className="mt-10">
                            <div className="flex justify-between">
                                <h4 className="font-bold text-2xl">Билеты ПДД (категория A и B)</h4>
                                <a href="/" className="text-blue-500 text-xl underline">Сменить на категорию CD</a>
                            </div>
                            <div className="mt-4">
                                <a href="/" className="text-blue-500 text-lg underline">Выберите диапазон вопросов</a>
                            </div>
                            <div className="flex justify-between mt-5">
                                <div className="bg-blue-500 text-white rounded-lg w-3/12 mr-10">
                                    <div className="m-6 flex flex-col">
                                        <div className="font-light text-5xl text-center mb-10">Категория <span className="font-medium">AB</span></div>
                                        <a href={`/lk/exam`} className=" text-blue-500 bg-white rounded-lg inline-block text-center py-4">Сдать экзамен</a>
                                    </div>
                                </div>
                                <div className="tickets w-9/12">
                                    <a href="/">1</a>
                                    <a href="/">2</a>
                                    <a href="/">3</a>
                                    <a href="/">4</a>
                                    <a href="/">5</a>
                                    <a href="/">6</a>
                                    <a href="/">7</a>
                                    <a href="/">8</a>
                                    <a href="/">9</a>
                                    <a href="/">10</a>
                                    <a href="/">11</a>
                                    <a href="/">12</a>
                                    <a href="/">13</a>
                                    <a href="/">14</a>
                                    <a href="/">15</a>
                                    <a href="/">16</a>
                                    <a href="/">17</a>
                                    <a href="/">18</a>
                                    <a href="/">19</a>
                                    <a href="/">20</a>
                                    <a href="/">21</a>
                                    <a href="/">22</a>
                                    <a href="/">23</a>
                                    <a href="/">24</a>
                                    <a href="/">25</a>
                                    <a href="/">26</a>
                                    <a href="/">27</a>
                                    <a href="/">28</a>
                                    <a href="/">29</a>
                                    <a href="/">30</a>
                                    <a href="/">31</a>
                                    <a href="/">32</a>
                                    <a href="/">33</a>
                                    <a href="/">34</a>
                                    <a href="/">35</a>
                                    <a href="/">36</a>
                                    <a href="/">37</a>
                                    <a href="/">38</a>
                                    <a href="/">39</a>
                                    <a href="/">40</a>
                                </div>
                            </div>


                        </div>
                        <div id="THEMES" className="bg-gray-200 flex justify-between p-12 mt-10 rounded-lg">
                            <div className="">
                                <div className="font-bold text-2xl mb-6">Вопросы ПДД по темам</div>
                                <div className="mb-4">Тренировка по темам - еще один удобный способ выучить ПДД. Ваша цель - все темы должны стать <span className="bg-green-300">зелеными!</span></div>
                                <div className="flex justify-between space-x-10">
                                    <div className="question-list">
                                        <ul>
                                            <li><a href="/">Общие положения (25 вопросов)</a></li>
                                            <li><a href="/">Дорожные знаки (126 вопросов)</a></li>
                                            <li><a href="/">Дорожная разметка (40 вопросов)</a></li>
                                            <li><a href="/">Сигналы светофора и регулировщика (39 вопросов)</a></li>
                                            <li><a href="/">Начало движения, маневрирование (113 вопросов)</a></li>
                                            <li><a href="/">Скорость движения (19 вопросов)</a></li>
                                            <li><a href="/">Обгон, опережение, встречный разъезд (36 вопросов)</a></li>
                                            <li><a href="/">Остановка и стоянка (47 вопросов)</a></li>
                                            <li><a href="/">Проезд перекрестков (113 вопросов)</a></li>
                                            <li><a href="/">Пользование внешними световыми приборами и звуковыми сигналами (23 вопроса)</a></li>
                                            <li><a href="/">Неисправности и условия допуска транспортных средств к эксплуатации (26 вопросов)</a></li>
                                            <li><a href="/">Безопасность движения и техника управления автомобилем (59 вопросов)</a></li>
                                            <li><a href="/">Оказание доврачебной медицинской помощи (20 вопросов)</a></li>
                                        </ul>
                                    </div>
                                    <div className="question-list">
                                        <ul>
                                            <li><a href="/">Общие обязанности водителей (15 вопросов)</a></li>
                                            <li><a href="/">Расположение транспортных средств на проезжей части (24 вопроса)</a></li>
                                            <li><a href="/">Приоритет маршрутных транспортных средств (5 вопросов)</a></li>
                                            <li><a href="/">Буксировка механических транспортных средств (8 вопросов)</a></li>
                                            <li><a href="/">Применение специальных сигналов (9 вопросов)</a></li>
                                            <li><a href="/">Движение по автомагистралям (13 вопросов)</a></li>
                                            <li><a href="/">Учебная езда и дополнительные требования к движению велосипедистов (4 вопроса)</a></li>
                                            <li><a href="/">Движение в жилых зонах (7 вопросов)</a></li>
                                            <li><a href="/">Движение через железнодорожные пути (11 вопросов)</a></li>
                                            <li><a href="/">Пешеходные переходы и места остановок маршрутных транспортных средств (5 вопросов)</a></li>
                                            <li><a href="/">Перевозка людей и грузов (6 вопросов)</a></li>
                                            <li><a href="/">Ответственность водителя (15 вопросов)</a></li>
                                            <li><a href="/">Применение аварийной сигнализации и знака аварийной остановки (9 вопросов)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="FAQ" className="mt-10">
                            <div className="font-bold text-2xl mb-6">Часто задаваемые вопросы</div>
                            <div className="faq-answ">
                                <Accordion>
                                    <AccordionItem header="1. Сдача экзамена ГИБДД">
                                        Основным условием получения водительского удостоверения или, как чаще говорят, «прав» является успешная сдача экзамена в ГИБДД. Задача сложная, но посильная, важно лишь хорошо подготовиться: собрать максимум информации о том, как сдать экзамен в ГИБДД по новым правилам, выучить правила дорожного движения (ПДД), потренироваться решать билеты ПДД онлайн и научиться ездить по своему городу — в этом вам помогут автошколы.
                                    </AccordionItem>

                                    <AccordionItem header="2. Какие экзамены нужно сдавать на права в ГИБДД">
                                        Чтобы получить права в ГИБДД нужно будет сдать два экзамена:
                                        <ul className="list-disc">
                                            <li>теоретический — на знание ПДД</li>
                                            <li>практический — на применение правил ПДД на практике и умение управлять автомобилем</li>
                                        </ul>
                                        Теоретический экзамен на знание правил дорожного движения в ГАИ похож на тот, который сдают все курсанты автошкол: получив билет ПДД, экзаменуемый за 20 минут должен ответить на 20 вопросов. Можно допустить две ошибки, но в этом случае придется в дополнительное время ответить на вопросы: на 5 вопросов за 5 минут, если была допущена одна ошибку и на 10 за 10 минут, если две.
                                        
                                        Тех, кто с этой частью тестирования успешно справляется, допускают к гораздо более сложному — практическому экзамену. Будущий водитель должен проехать по определенному маршруту, соблюдая правила ПДД и выполнив при этом по указанию экзаменатора порядка 20 маневров.
                                    </AccordionItem>

                                    <AccordionItem header="3. Где сдают экзамены для получения водительского удостоверения">
                                        Suspendisse massa risus, pretium id interdum in, dictum sit amet
                                        ante. Fusce vulputate purus sed tempus feugiat.
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}