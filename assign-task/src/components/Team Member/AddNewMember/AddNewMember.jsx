import React, { useState } from 'react'
import styles from "./AddNewMember.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { handleTeamAdd } from '../../../action'


const AddNewMember = ({ setTeam }) => {
    const dispatch = useDispatch()
    const initial = {
        name: "",
        gender: ""
    }
    const [formdata, setFormData] = useState(initial)
    const handlegender = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className={styles.AddMember}>
            <div className={styles.title}>
                <h1>Add New Member</h1>
                <AiOutlineClose size={20} onClick={() => setTeam(false)} />
            </div>
            <hr />
            <div className={styles.form}>
                <input type="text" placeholder='Enter Name Here..' name='name' onChange={(e) => handlegender(e)} value={formdata.name} />
                <h1>Gender</h1>
                <div className={styles.radio}>
                    <input type="radio" name="gender" id="male" value="male" checked={formdata.gender == "male"} onChange={(e) => handlegender(e)} />
                    <label htmlFor="male">Male</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" name="gender" id="female" value="female" checked={formdata.gender == "female"} onChange={(e) => handlegender(e)} />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className={styles.btnwrapper}>
                <button onClick={() => { dispatch(handleTeamAdd(formdata)); setFormData(initial) }}>Submit</button>
            </div>
        </div>
    )
}

export default AddNewMember
