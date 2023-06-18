import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from "../../components/Avatar/Avatar"

const Navbar = () => {
    var User = null;

     return (
    
       <nav className="main-nav">
            <div className="navbar">
                <Link to='/' className="nav-item nav-logo">

                    <img src={logo} alt="logo" />

                </Link>

                <Link to="/" className="nav-item nav-btn">About</Link>
                <Link to="/" className="nav-item nav-btn">Products</Link>
                <Link to="/" className="nav-item nav-btn">For Teams</Link>

                <form >
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" width="20" className="search-icon" />

                    {User === null ?
                        <Link to="/Auth" className="nav-item nav-links">Log In</Link>
                        : <>
                            <Avatar   backgroundColor="#009dff" px='10px' py = '7px' borderRadius='50%'   ><Link to="/User" style={{ color : 'white' , textDecoration:'none' }}  >Y</Link></Avatar>

                            <button  className="nav-item nav-links">Log Out</button>

                        </>
                    }
                </form>

            </div>
        </nav>
    )
}

export default Navbar