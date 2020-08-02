import React, { useState } from 'react';
import '../Components/style.css'
import { FaAlignRight } from 'react-icons/fa';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  //d-flex flex-row-reverse for left align
  return (
    <div id="menu-nav" >
      <nav id="navigation-bar" class="navbar navbar-expand-md ">
        <a class="navbar-brand" href="#"><h1 className="logo">OverMars</h1></a>
        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="collapsibleNavbar">
          <ul class="navbar-nav ">
            <li class="nav-item space">
              <a href="/"><i class="fa fa-home"></i><span>Home</span></a>
            </li>
            <li class="nav-item space">
              <a href="services"><i class="fa fa-handshake"></i><span>Services</span></a>
            </li>
            <li class="nav-item space">
              <a href="/about"><i class="fa fa-user"></i><span>About</span></a>
            </li>
            <li class="nav-item space">
              <a href="/contact"><i class="fa fa-book"></i><span>Contact</span></a>
            </li>
            <li class="nav-item space">
              <a href="/projects"><i class="fa fa-rss"></i> <span>Projects</span></a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default NavBar;