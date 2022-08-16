import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="nepal" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Nepal
          </a>
          <ul className="dropdown-menu" aria-labelledby="nepal">
            <li><a className="dropdown-item" href="#">Trekking</a></li>
            <li><a className="dropdown-item" href="#">climbing</a></li>
            <li><a className="dropdown-item" href="#">cultural tour and sightseeing</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="bhutan" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bhutan
          </a>
          <ul className="dropdown-menu" aria-labelledby="bhutan">
          <li><a className="dropdown-item"  href="#">Trekking</a></li>
            <li><a className="dropdown-item"  href="#">climbing</a></li>
            <li><a className="dropdown-item"  href="#">cultural tour and sightseeing</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="india" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            India
          </a>
          <ul className="dropdown-menu" aria-labelledby="india">
          <li><a className="dropdown-item" href="#">Trekking</a></li>
            <li><a className="dropdown-item" href="#">climbing</a></li>
            <li><a className="dropdown-item" href="#">cultural tour and sightseeing</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="tibet" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Tibet
          </a>
          <ul className="dropdown-menu" aria-labelledby="tibet">
          <li><a className="dropdown-item" href="#">Trekking</a></li>
            <li><a className="dropdown-item" href="#">climbing</a></li>
            <li><a className="dropdown-item" href="#">cultural tour and sightseeing</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="tibet" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Multi Country
          </a>
          <ul className="dropdown-menu" aria-labelledby="multicountry">
          <li><a className="dropdown-item" href="#">Nepal and bhutan</a></li>
            <li><a className="dropdown-item" href="#">Nepal and India </a></li>
            <li><a className="dropdown-item" href="#">Nepal and Tibet</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar