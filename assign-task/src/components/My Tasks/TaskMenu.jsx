import React, { useState } from 'react'
import styles from "./TaskMenu.module.scss"
import TaskNav from "./TaskNav"
import Form from '../Form/Form'
import { useSelector } from 'react-redux'
import Task from './Task/Task'
import UpdateTask from "./UpdateTask/UpdateTask"
import { useEffect } from 'react'

const TaskMenu = () => {
    const [create, setCreate] = useState(false)
    const [update, setUpdate] = useState()
    const Datas = useSelector((state) => state.datareducter.list)
    useEffect(() => {
        localStorage.setItem("Datas", JSON.stringify(Datas))
    }, [Datas])
    function CreateNew() {
        setCreate(!create)
    }
    function handleUpdateForm(data) {
        setUpdate({ ...data })
    }
    return (
        <div
            className={styles.taskmenu}>
            <TaskNav create={create} CreateNew={CreateNew} />
            <div className={styles.desbord}>
                <h1>Tasks</h1>
                <div className={styles.tasks}>
                    <h1>OverDue</h1>
                    {
                        Datas &&
                        Datas.map((Data, index) => {
                            return <Task Data={Data} key={index} handleUpdateForm={handleUpdateForm} />
                        })

                    }
                </div>
            </div>
            {
                create ? <Form CreateNew={CreateNew} /> : null
            }
            {
                update && update.taskName ? <UpdateTask update={update} setUpdate={setUpdate} /> : null
            }
        </div>
    )
}

export default TaskMenu
