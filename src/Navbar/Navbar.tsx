import {Link} from "react-router-dom";
import './Navbar.css';
import "bulma/css/bulma.min.css";


export default function Navbar() {
  return <div>
      <nav className={'navbar'} role="navigation">
          <Link className="navbar-item" to="/search">
            <img src='logo.png' alt={'Doubles logo'} />
          </Link>
      <Link className={'navItem navbar-item'} to="/search">Search</Link>
      <Link className={'navItem navbar-item'} to="/duo">Duo</Link>
    </nav>
      <hr className={'separator'}/>
  </div>;
}
