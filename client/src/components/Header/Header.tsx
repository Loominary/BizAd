import { Link, NavLink } from "react-router-dom";
import Title from "../Title/Title";

function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">

                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <i className="bi-cup-hot me-3"></i>
                        BizAd
                    </Link>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item me-3">
                            <NavLink to="/services" className="nav-link">
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>

                    </ul>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item me-3">

                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink to="/signup" className="nav-link">
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <LogOut /> */}
                        </li>
                    </ul>
                </div>
            </nav>

            <Title text={`Some header text`}>
                <small className="text-muted d-block">
                    <span>Some text</span>
                </small>
            </Title>
        </>

    );
}

export default Header;