import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return(
        <header>
            <h4>Navigation Bar</h4>
            <ul>
                <li key="home"><Link to="/">Home</Link></li>
                <li key="products"><Link to="/products">Our Baskets</Link></li>
                <li key="basket"><Link to="/basket">Your Basket</Link></li>
            </ul>
        </header>
    )
}

export default NavBar