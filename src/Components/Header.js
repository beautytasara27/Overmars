
import React from 'react'
import '../Components/projectsStyle.css'

function Header() {
    return (

        <div className="inner-widt">
            <div className=" row ">
                <div className="col-2 logo-div"><img className="logo" src="logo4.png" alt="logo" /></div>
                <div className="col header-list">
                    <div className="row header-list justify-content-end" >
                           <p className="header-items">Get Quotation</p>
                           <p className="header-items">|</p>
                           <p className="header-items">+2783 222 320</p>
                    </div>
                </div>
            </div></div>
    )
}

export default Header;