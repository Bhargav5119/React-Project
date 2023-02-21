import React from 'react'
import styles from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom'
import { BsBriefcase } from "react-icons/bs";
import {CiUser} from "react-icons/ci"
 const Navbar = () => {
  return (
    <div
      className={styles.aside}
    >
      <div className={styles.logo}>
        Task Manage
      </div>
      <nav>
        <NavLink to="/"><BsBriefcase /> My Tasks</NavLink>
        <NavLink to="team-member"><CiUser /> Team Member</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
