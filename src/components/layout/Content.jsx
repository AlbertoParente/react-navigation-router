import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../../view/examples/About'
import Home from '../../view/examples/Home'
import './Content.css'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />     
            </Route>
            <Route path="/">
                <Home />     
            </Route>
        </Switch>
    </main>
)

export default Content
