import { Helmet } from "react-helmet"
import DotRing from "../components/DotRing/DotRing";

export default function Login() {
    return (
        <div id="Auth" className="">
            <Helmet>
                <title>VM | Авторизация</title>
            </Helmet>
            <DotRing />
            <section class="flex flex-col md:flex-row h-screen items-center">

            <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src='./login_background.webp' alt="" class="w-full h-full object-cover" />
            </div>

            <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

            <div class="w-full h-100">

            <img src="/logo.svg" className="App-logo w-2/3" alt="logo" />
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Войдите в свой аккаунт</h1>

            <form class="mt-6" action="#" method="POST">
                <div>
                    <label class="block text-gray-700">Email Адрес</label>
                    <input type="email" name="" id="" placeholder="Введите Email адрес" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>

                <div class="mt-4">
                    <label class="block text-gray-700">Пароль</label>
                    <input type="password" name="" id="" placeholder="Введите пароль" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>

                <div class="text-right mt-2">
                    <a href="/" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Забыли пароль?</a>
                </div>

                <button type="submit" class="w-full block bg-primary hover:bg-primary_hover focus:bg-primary_focus text-white font-semibold rounded-lg px-4 py-3 mt-6">Войти</button>
            </form>

        

            <p class="mt-8">Нет аккаунта? <a href={`/register`} class="text-blue-500 hover:text-blue-700 font-semibold">Создать аккаунт</a></p>


        </div>
  </div>

</section>
        </div>
    );
}