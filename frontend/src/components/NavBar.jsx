import '../css/NavBar.css'
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Games Catalog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-item nav-link" to="/favorites">
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar