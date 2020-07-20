import React from 'react'
import '../Components/servicesStyle.css'

function Services() {
    return (
        
            <div className="service-section">
            <h1>Services</h1>
                <div className="border"></div>
                <div className=" inner-width list container jumbotron">
                    <div class="aim">
                        <p>With every project, Fort implements a series of procedures that provides critical guidelines by which each component of the project may be carefully and precisely monitored. Fort actively participates with our clients and their design team during each stage of the project to ensure a project that produces the best value within the budget.</p>
                    </div>
                    <ul>
                        <li>
                            <h4>Bricklaying and Plastering</h4>
                            <ul>
                                <li>Professional bricklaying</li>
                                <li>Domestic bricklaying</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Carpentry and Drywall Partitioning</h4>
                            <ul>
                                <li>All woodwork fitting</li>
                                <li>Office partitioning and repairs</li>
                                <li>Ceiling - suspended and gypsum board</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Painting</h4>
                            <ul>
                                <li>Large scale professional painting</li>
                                <li>Small scale renovational painting</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Plumbing</h4>
                            <ul>
                                <li>Commercial plumbing</li>
                                <li>Domestic plumbing</li>
                                <li>General maintenance on call</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Renovations</h4>
                            <ul>
                                <li>Full face lift</li>
                                <li>Building</li>
                                <li>Ceiling repairs</li>
                                <li>Tiling</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Waterproofing and Damp Proofing</h4>
                            <ul>
                                <li>Membrane waterproofing</li>
                                <li>Torch on waterproofing</li>
                                <li>Crack repairs</li>
                                <li>Damp repairs</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Other Services</h4>
                            <ul>
                                <li>Vinyl sheeting</li>
                                <li>Epoxy and urethane floors</li>
                                <li>Concrete expansions, joins, repairs etc.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        
    )
}

export default Services;