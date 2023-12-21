import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className=" space-y-2 bg-stone-300 px-4 py-3 ">
      <h1 className="  font-bold">Something went wrong 😢</h1>
      <p className=" text-sm font-medium">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
