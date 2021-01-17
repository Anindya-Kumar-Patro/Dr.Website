import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../images/home.jpeg'

const Commonelement = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.greetings}<strong className="brand-name"> {props.pagename}</strong></h1>
                            <h3 className="my-3">
                                {props.description}
                            </h3>
                            <div className="mt-3">
                                <NavLink to={props.btnlink_link} className="btn-get-started">{props.btnlink_text}</NavLink>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="Dr.Website" />
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Commonelement