import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const HomeRoot = () => {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    )
}

export default HomeRoot;