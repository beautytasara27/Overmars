import React from 'react';
import '../Components/style.css'

function NavBar(){
    return(
        <div id="menu-nav" class="container">
        <div id="navigation-bar">
          <ul>
            <li><a href="/"><i class="fa fa-home"></i><span>Home</span></a></li>
            <li><a href="services"><i class="fa fa-handshake"></i><span>Services</span></a></li>
            <li><a href="/about"><i class="fa fa-user"></i><span>About</span></a></li>
            <li><a href="/contact"><i class="fa fa-book"></i><span>Contact</span></a></li>
            <li><a href="/projects"><i class="fa fa-rss"></i> <span>Projects</span></a></li>
          </ul>
        </div>
        </div>
    )
}

export default NavBar;