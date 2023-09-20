import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
        <NavLink to="/">
            <img src={logo} alt="Logo" width="150" height="auto"/>
        </NavLink>
    )
}