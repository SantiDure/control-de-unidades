import { Link } from "react-router-dom"
import logo from "../../assets/logo-bomberos.png"
import "./NavBar.css"
function NavBar(){
return <>
<nav className="navbar bg-body-tertiary">
  <div className="container navbar__container__div">
    <Link className="navbar-brand navbar__container__link" href="/">
      <img src={logo} className="logo_bomberos" alt="Bomberos Montes de Oca" />
      <p><b>Control de unidades</b></p>
    </Link>
  </div>
</nav>

</>
}

export default NavBar