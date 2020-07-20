import React from 'react'
import '../Components/aboutStyle.css'

function About(){
    return(
        <div class="container">
        <h1 class="heading"><span>meet</span>Our Team</h1>
    
        <div class="profiles">
          <div class="profile">
            <img src="profiles/img1.jpg" class="profile-img"/>
    
            <h3 class="user-name">William</h3>
            <h5>Creative Director</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
          </div>
          <div class="profile">
            <img src="profiles/img2.jpg" class="profile-img"/>
    
            <h3 class="user-name">Camila</h3>
            <h5>Managing Partner</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
          </div>
          <div class="profile">
            <img src="profiles/img3.jpg" class="profile-img"/>
    
            <h3 class="user-name">Isabella</h3>
            <h5>Project Manager</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
          </div>
        </div>
      </div>
    )
}

export default About;