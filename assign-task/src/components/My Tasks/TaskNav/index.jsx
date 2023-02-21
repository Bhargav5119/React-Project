import React from 'react'
import styles from "./TaskNav.module.scss"
import { AiOutlinePlus } from "react-icons/ai"
import {BsChevronDown} from "react-icons/bs"
import {HiUserCircle} from "react-icons/hi"
const index = ({CreateNew}) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.create} onClick={CreateNew}>
                <AiOutlinePlus />
                Create
            </div>
            <div className={styles.admin}>
                <HiUserCircle size={30}/>
                Admin
                <BsChevronDown />
            </div>
        </nav>
    )
}

export default index
