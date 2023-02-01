import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { BsPerson } from "react-icons/bs"
import { IoSearchOutline } from "react-icons/io5"
import { navmenu } from '../Global'
import { Nav } from './NavbarStyle'
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"

const Navbar = () => {
    const [isnavopen, setIsnavopen] = useState(false)
    return (
        <Nav >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="links">
                <ul className={isnavopen ? "active" : ""}>
                    {
                        navmenu.map(data => (
                            <li key={data.id} >
                                <Link activeClass='active' spy={true} to={data.url} smooth={true} duration={500}
                                offset={-40} onClick={()=>setIsnavopen(!isnavopen)}>{data.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="account_info">
                <div className="account">
                    <span> <BsPerson /> </span>
                    <span> My Account </span>
                </div>
                <div className="search">
                    <span> <IoSearchOutline /> </span>
                </div>
            </div>
            <div className="toggle" onClick={() => setIsnavopen(!isnavopen)}>
                {
                    isnavopen ? <MdClose /> :<GiHamburgerMenu />
                }
            </div>
        </Nav>
    )
}

export default Navbar