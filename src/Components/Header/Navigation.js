import {Link} from "react-router-dom";

function Navigation() {
    return(
    <div className="top-nav">
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <Link className="logo" to="/"><b>MovieChecker</b></Link>
    </div>
    );
}

export default Navigation;