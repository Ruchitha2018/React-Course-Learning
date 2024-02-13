import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    let message = '';
    if(error.status === 500) {
      message = error.data.message;
    }
    return (
        <>Error {message}</>
    )
}

export default Error;