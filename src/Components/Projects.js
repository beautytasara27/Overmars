import React from 'react'
import '../Components/projectsStyle.css'
import Footer1 from './Footer1'
import Header from './Header'


function Projects() {
  return (

    <div class="gallery-section">
    
      <div class="inner-width">
        
        <br/>
        <div className="page-name">
        <br />
        <h1>Gallery</h1>
        <br />
        <div class="gallery">
          <a href="img/1.png" class="image">
            <img src={process.env.PUBLIC_URL + 'img/1.png'} alt="hey" />
          </a>

          <a href="img/2.png" class="image">
            <img src="img/2.png" alt="" />
          </a>

          <a href="img/3.png" class="image">
            <img src="img/3.png" alt="" />
          </a>

          <a href="img/4.png" class="image">
            <img src="img/4.png" alt="" />
          </a>

          <a href="img/5.png" class="image">
            <img src="img/5.png" alt="" />
          </a>

          <a href="img/6.png" class="image">
            <img src="img/6.png" alt="" />
          </a>

          <a href="img/7.png" class="image">
            <img src="img/7.png" alt="" />
          </a>

          <a href="img/8.png" class="image">
            <img src="img/8.png" alt="" />
          </a>
          <a href="img/2.png" class="image">
            <img src="img/2.png" alt="" />
          </a>

          <a href="img/3.png" class="image">
            <img src="img/3.png" alt="" />
          </a>

          <a href="img/4.png" class="image">
            <img src="img/4.png" alt="" />
          </a>

          <a href="img/5.png" class="image">
            <img src="img/5.png" alt="" />
          </a>

          <a href="img/6.png" class="image">
            <img src="img/6.png" alt="" />
          </a>

          <a href="img/7.png" class="image">
            <img src="img/7.png" alt="" />
          </a>

          <a href="img/8.png" class="image">
            <img src="img/8.png" alt="" />
          </a>
          <a href="img/8.png" class="image">
            <img src="img/8.png" alt="" />
          </a>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>


  )
}

export default Projects;

