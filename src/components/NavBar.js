import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {

    return(
        <header>
            <h4>Navigation Bar</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product List</Link></li>
                <li><Link to="/basket">Your Basket</Link></li>
            </ul>
        </header>
    )
}

export default NavBar