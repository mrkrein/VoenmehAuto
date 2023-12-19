import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet"
import DotRing from "../components/DotRing/DotRing";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center h-screen flex-col">
        <DotRing />
        <Helmet>
          <title>VM | Ошибка</title>
        </Helmet>
        <a href={`/`} className="w-1/5 mb-20"><img src="/logo.svg" className="App-logo w-full" alt="logo" /></a>
        <h1 className="text-4xl font-bold">Упс!</h1>
        <p className="mt-2">Возникла ошибка при выполнении вашего запроса.</p>
        <p className="mt-2">
            <i className="text-i_muted">{error.statusText || error.message}</i>
        </p>
        <a href={`/`} className="mt-20 text-white bg-secondary px-8 py-3 rounded-lg text-xl font-medium hover:bg-primary transition-colors">Вернуться на главную</a>
    </div>
  );
}