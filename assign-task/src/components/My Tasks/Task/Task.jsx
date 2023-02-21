import React from 'react'
import styles from "./Task.module.scss"
import { AiOutlineCalendar } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { handleStatus } from "../../../action"

const Task = ({ Data,handleUpdateForm }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className={styles.container}>
                <div>
                    <input type="checkbox" checked={Data.status} onChange={() => dispatch(handleStatus(Data.id))} />
                </div>
                <div className={styles.click} onClick={()=>{handleUpdateForm(Data)}}>
                    <div className={styles.title}>
                        <div >
                            <h1 className={Data.status ? styles.markDone : null}>{Data.taskName}</h1>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.info}>
                        <h4>{Data.dueDate && <AiOutlineCalendar />} {Data.dueDate}</h4>
                        <h6>{Data.labels}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task
