import React from 'react'
import '../Components/aboutStyle.css'

function About(){
    return(
        <div class="container">
        <h1 class="heading">Our Team</h1>
    
        <div class="profiles">
          <div class="profile">
            <img src="profiles/img2.jpg" class="profile-img"/>
    
            <h3 class="user-name">Celesti</h3>
            <h5>Director</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
          </div>
          <div class="profile">
            <img src="profiles/img1.jpg" class="profile-img"/>
    
            <h3 class="user-name">Zacharia</h3>
            <h5>Project Manager</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
          </div>
          <div class="profile">
            <img src="profiles/img3.jpg" class="profile-img"/>
    
            <h3 class="user-name">Tumelo </h3>
            <h5>Clerk</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
          </div>
        </div>
      </div>
    )
}

export default About;