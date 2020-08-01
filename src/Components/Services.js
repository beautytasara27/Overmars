import React from 'react'
import '../Components/servicesStyle.css'
import Footer1 from './Footer1'
import Header from './Header'

function Services() {
    return (

        <div className="service-section">
            <div className=" inner-widh">
                
                <div className="servicess">
                    <div className="row justify-content-between">
                        <div className="col aim" style={{ textAlign: "center", width: "30%", paddingTop: "300px", color: "white" }}>
                            <p>With every project, OverMars implements a series of procedures that provides critical guidedivnes by which each component of the project may be carefdivly and precisely monitored. OverMars actively participates with our cdivents and their design team during each stage of the project to ensure a project that produces the best value within the budget.</p>
                            <div style={{  width: "30%", color: "white" }}> <button className="button">Get Quotation</button></div>
                            </div>
                        <div className="col-8"></div>
                        
                    </div>
                    </div>
                    <br />
                    <h2>Services</h2>
                    <div className="row justify-content-between" style={{ paddingTop: "50px" }}>
                        <br/>
                        <div class="text card-group" style={{paddingRight:"20px"}}>
                            <div className="card">
                                <h5 className="card-header">Painting</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Large scale professional painting</div>
                                    <div className="list-group-item">Small scale renovational painting</div>
                                </div>
                            </div>
                            <br/>
                            <div className="card">
                                <h5 className="card-header">Plumbing</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Commercial plumbing</div>
                                    <div className="list-group-item">Domestic plumbing</div>
                                    <div className="list-group-item">General maintenance on call</div>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <h5 className="card-header">Renovations</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Fdivl face lift</div>
                                    <div className="list-group-item">Building</div>
                                    <div className="list-group-item">Ceiling repairs</div>
                                    <div className="list-group-item">Tiling</div>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <h5 className="card-header">Bricklaying and Plastering</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Professional bricklaying</div>
                                    <div className="list-group-item">Domestic bricklaying</div>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <h5 className="card-header">Waterproofing and Damp Proofing</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Membrane waterproofing</div>
                                    <div className="list-group-item">Torch on waterproofing</div>
                                    <div className="list-group-item">Crack repairs</div>
                                    <div className="list-group-item">Damp repairs</div>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <h5 className="card-header">Carpentry and Drywall Partitioning</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">All woodwork fitting</div>
                                    <div className="list-group-item">Office partitioning and repairs</div>
                                    <div className="list-group-item">Ceiling - suspended and gypsum board</div>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <h5 className="card-header">Other Services</h5>
                                <div className=" list-group list-group-flush">
                                    <div className="list-group-item">Vinyl sheeting</div>
                                    <div className="list-group-item">Epoxy and urethane floors</div>
                                    <div className="list-group-item">Concrete expansions, joins, repairs etc.</div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                
                
            </div>
        </div>

    )
}

export default Services;