import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="main-navigation">
            <li><NavLink to="" end>Home</NavLink></li>
            <li><NavLink to="product" className={({isActive}) => isActive ? 'active': ''}>Products</NavLink></li>
        </ul>
    )
}

export default Navigation;