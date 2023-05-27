import './Nav.scss';
function Nav() {
    return (
        <div className="topnav">
            <a className="active" href="/">
                Covid
            </a>
            <a href="/todos">Todos</a>
            <a href="/countdown">CountDown</a>
            <a href="/secret">Secret</a>
        </div>
    );
}

export default Nav;
