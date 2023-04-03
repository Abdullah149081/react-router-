import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="space-y-12 h-screen items-center ">
      <h1 className="text-5xl font-black">Oops!</h1>
      <p className="text-4xl font-bold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
