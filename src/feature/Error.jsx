import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return <div>
        <h1>Error Encountered</h1>
        <h3>{err.status}</h3>
        </div>
}