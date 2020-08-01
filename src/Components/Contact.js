import React from 'react'
import '../Components/contactStyle.css'
import Header from './Header';

function Contact() {
  return (
    <div>
      <section id="contact-section">
      
        <div class=" inner-width">
        
          <h2>Contact Us</h2>
          <p>We value feedback from our customers</p>
          <div class="contact-form">


            <div>
              <i class="fa fa-map-marker"></i><span class="form-info"> 1119 Venda Street
              Daveyton 7520
                 </span>
              <i class="fa fa-phone" > </i><span class="form-info">  +2783 222 320</span>
              <i class="fa fa-envelope"></i><span class="form-info"> tazcreations44@gmail.com</span>
            </div>


            <div>
              <form>
                <input type="text" placeholder="Firstname" required />
                <input type="text" placeholder="Lastname" />
                <input type="Email" placeholder="Email" required />
                <input type="text" placeholder="Subject" />
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button class=" butto" >Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;