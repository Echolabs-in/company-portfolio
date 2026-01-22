import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
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
        </div>
        
        <nav className="nav">
          <a href="#services" className="nav-link active">Services</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#resources" className="nav-link">Resources</a>
        </nav>
        
        <button className="cta-button header-cta">Book A Strategy Session</button>
      </div>
    </header>
  )
}

export default Header

