import { Helmet } from "react-helmet"
import DotRing from "../components/DotRing/DotRing";
import { SmartCaptcha } from '@yandex/smart-captcha';
import { useState } from 'react';
import axios from "axios";

export default function Register() {
    const [token, setToken] = useState('');
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);
            const res = await fetch(`http://localhost:5000/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if (data.success === false) {
                setError(true);
                return;
            }
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }
    async function getDataAxios() {
        /*const headers = {
            'Content-Type': 'text/plain'
        };
        axios.get(`https://smartcaptcha.yandexcloud.net/validate?secret=ysc2_kDuRx5DbKQdIzS7Zapf4dGLDhpoN3gueazgs2Gezba76d895&token=${token}`, {
            headers
          }).then((response) => {
            console.log(response.data);
        });*/
    }
    console.log(formData);
    return (
        <div id="Auth">
            <Helmet>
                <title>VM | Регистрация</title>
            </Helmet>
            <DotRing />
            <section className="flex flex-col md:flex-row h-screen items-center">

            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src='./login_background.webp' alt="" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

            <div className="w-full h-100">

            <img src="/logo.svg" className="App-logo w-2/3" alt="logo" />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Создайте свой аккаунт</h1>

            <form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700">Ваше имя</label>
                    <input type="text" onChange={handleChange} name="" id="username" placeholder="Введите ваше имя" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Email Адрес</label>
                    <input type="email" onChange={handleChange} name="" id="email" placeholder="Введите Email адрес" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Пароль</label>
                    <input type="password" onChange={handleChange} name="" id="password" placeholder="Введите пароль" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>

                <div className="mt-4 mb-5">
                    <label className="block text-gray-700">Повторите пароль</label>
                    <input type="password" onChange={handleChange} name="" id="repeatpass" placeholder="Повторите пароль" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  />
                </div>

                <SmartCaptcha sitekey="ysc1_kDuRx5DbKQdIzS7Zapf4ZX9dkl0ig9wGXF72GIsnd4883698" onSuccess={setToken} />

                <button disabled={loading} type="submit" className="w-full block bg-primary hover:bg-primary_hover focus:bg-primary_focus text-white font-semibold rounded-lg px-4 py-3 mt-6" onClick={getDataAxios}>
                    {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
            </form>

        

            <p className="mt-8">Уже есть аккаунт? <a href={`/login`} className="text-blue-500 hover:text-blue-700 font-semibold">Войти</a></p>
            <p className='text-red-700 mt-5'>{error && 'Что-то пошло не так!'}</p>


        </div>
  </div>

</section>
        </div>
    );
}

