import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img
              src="/images/ecolabs-logo2.png"
              alt="Ecolabs logo"
              className="logo-img"
            />
          </div>
          <img
            src="/images/ecolabs-text2.png"
            alt="Ecolabs"
            className="logo-text-img"
          />
        </Link>
        
        <nav className="nav">
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Work</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Resources</NavLink>
        </nav>
        
        <Link to="/book-strategy" className="cta-button header-cta">Book A Strategy Session</Link>
      </div>
    </header>
  )
}

export default Header

