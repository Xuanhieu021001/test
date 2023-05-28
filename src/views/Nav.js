import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
function Nav() {
    return (
        <div className="topnav">
            <NavLink activeclassname="active" to="/">
                Covid
            </NavLink>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/countdown">CountDown</NavLink>
            <NavLink to="/blog">BlogApp</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    );
}

export default Nav;
