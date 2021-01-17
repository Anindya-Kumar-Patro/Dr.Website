import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../images/home.jpeg'
import Commonelement from './Commonelement'


const Home = () => {
    return (
        <>
        <Commonelement greetings = "Welcome to" 
        pagename = "HomePage"
        description = "This is a website which can be used for ordering medicines, predicting health diseases and booking appointements to nearby hospitals too."
        btnlink_text = "Click here"
        btnlink_link = "/predict"
        />
        </>
    )
}

export default Home