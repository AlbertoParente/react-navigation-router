import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/param/1">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/welcome">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/notexists">Not Exists</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu
