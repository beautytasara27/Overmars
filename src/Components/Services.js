import React from 'react'
import '../Components/servicesStyle.css'

function Services() {
    return (
        
            <div className="service-section">
            <h1>Services</h1>
                <div className="border"></div>
                <div className=" inner-width list container jumbotron">
                <div >
                <img className= "image" src="img/worker.jpg" alt="hey"/>
                </div>
                <br/>
                    <div class="aim">
                        <p>With every project, OverMars implements a series of procedures that provides critical guidelines by which each component of the project may be carefully and precisely monitored. OverMars actively participates with our clients and their design team during each stage of the project to ensure a project that produces the best value within the budget.</p>
                    </div>
                    <br/>
                    <ul class="text listNone ">
                      
                        <li>
                            <h5>Painting</h5>
                            <ul className="leftMargin">
                                <li>Large scale professional painting</li>
                                <li>Small scale renovational painting</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <h5>Plumbing</h5>
                            <ul className="leftMargin">
                                <li>Commercial plumbing</li>
                                <li>Domestic plumbing</li>
                                <li>General maintenance on call</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <h5>Renovations</h5>
                            <ul className="leftMargin">
                                <li>Full face lift</li>
                                <li>Building</li>
                                <li>Ceiling repairs</li>
                                <li>Tiling</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                        <h5>Bricklaying and Plastering</h5>
                        <ul className="leftMargin">
                            <li>Professional bricklaying</li>
                            <li>Domestic bricklaying</li>
                        </ul>
                    </li>
                        <br/>
                        <li>
                            <h5>Waterproofing and Damp Proofing</h5>
                            <ul className="leftMargin">
                                <li>Membrane waterproofing</li>
                                <li>Torch on waterproofing</li>
                                <li>Crack repairs</li>
                                <li>Damp repairs</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <h5>Carpentry and Drywall Partitioning</h5>
                            <ul className="leftMargin">
                                <li>All woodwork fitting</li>
                                <li>Office partitioning and repairs</li>
                                <li>Ceiling - suspended and gypsum board</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <h5>Other Services</h5>
                            <ul className="leftMargin">
                                <li>Vinyl sheeting</li>
                                <li>Epoxy and urethane floors</li>
                                <li>Concrete expansions, joins, repairs etc.</li>
                            </ul>
                        </li>
                        <br/>
                        <br/>
                    </ul>
                </div>
            </div>
        
    )
}

export default Services;