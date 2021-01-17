import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './ReactMenu/About'
import Ecommerce from './ReactMenu/Ecommerce'
import Home from './ReactMenu/Home'
import Predict from './ReactMenu/Predict'
import Contact from './ReactMenu/Contact'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './ReactMenu/Navbar'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/ecommerce' component={Ecommerce}/>
            <Route exact path='/predict' component={Predict}/>
            <Route exact path='/contact' component={Contact}/>
            
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default App
