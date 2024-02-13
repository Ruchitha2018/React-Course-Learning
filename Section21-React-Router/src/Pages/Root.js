import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = () => {
 return (
  <>

   <Navigation />
   Hi
   <div className="main-content">
    <Outlet />
   </div>

  </>
 )
}

export default Root;