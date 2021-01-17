import React from 'react'
import Commonelement from './Commonelement'

const About = () => {
    return (
        <>
       <Commonelement greetings = "This is " 
        pagename = "AboutPage"
        description = "This website is made by Anindya Kumar Patro using Machine Learning and each model present at predict section has an accuracy of approximately 96%."
        btnlink_text = "Contact Us"
        btnlink_link = "/contact"
        />
        </>
    )
}

export default About
