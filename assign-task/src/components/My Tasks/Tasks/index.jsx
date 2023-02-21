import React from 'react'
import styles from "./Tasks.module.scss"
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
const Tasks = () => {
    const Datas = useSelector((state) => state.datareducter.list)
    return (
        <>

            <div className={styles.tasks}>
                <h1>OverDue</h1>
                {
                    Datas.map((Data, index) => {
                        return <Task Data={Data} key={index}  />
                    })
                }
            </div>
        </>
    )
}

export default Tasks
