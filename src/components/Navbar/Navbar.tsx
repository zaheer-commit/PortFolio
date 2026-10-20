import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar_container">

        <Link to="/" className="my_name" onClick={closeMenu}> Zaheer Nazari </Link>

         <div 
          className={`navbar_hamburger ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar_links ${isMenuOpen ? 'is-active' : ''}`}>
          <li> <Link to="/" onClick={closeMenu}> Home </Link> </li>
          <li> <Link to="/about" onClick={closeMenu}> About me </Link> </li>
          <li> <Link to="/projects" onClick={closeMenu}> Projects </Link> </li>
          <li> <Link to="/getintouch" onClick={closeMenu}> Get in touch </Link> </li>
        </ul>

      </div>
    </nav>
  );
};
export default Navbar;