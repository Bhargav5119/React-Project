import React, { useState } from 'react'
import { GrClose } from "react-icons/gr"
import styles from "./UpdateTask.module.scss"
import { useDispatch } from 'react-redux'
import { handleUpdate,handleDelete } from '../../../action/index'

const Form = ({ update, setUpdate }) => {
    const dispatch = useDispatch()
    // const initial = {
    //     taskName: "Task Name",
    //     taskDescription: "",
    //     checkList: [],
    //     CommentList: "",
    //     dueDate: "",
    //     projectList: "",
    //     assign: [],
    //     labels: ""
    // }
    const [checklist, setChecklist] = useState()
    const [formData, setFormData] = useState(update)
    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleCheckList = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: formData.checkList.push(checklist),
        })
        setChecklist("")
    }

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <h1>Update Task</h1>
                <GrClose onClick={()=>setUpdate()} size={18} />
            </div>
            <hr />
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <div className={styles.task_wrapper}>
                        <input type="text" placeholder='Task Name' value={formData.taskName} onChange={handleChanges} name="taskName" />
                        <input type="text" placeholder='Description' value={formData.taskDescription} onChange={handleChanges} name="taskDescription" />
                    </div>
                    <div className={styles.checklist}>
                        <h1>CheckList</h1>
                        <div className={styles.additem}>
                            <input type="text" placeholder='Add item here...' value={checklist} onChange={e => setChecklist(e.target.value)} />
                            <button onClick={handleCheckList} name="checkList">Add Item</button>
                        </div>
                        {
                            formData.checkList.map((list, index) => (<h4 key={index}>{list}</h4>))
                        }
                    </div>
                    <div className={styles.comments}>
                        <h1>Comments</h1>
                        <input type="text" placeholder='Enter Comments Here...' name='CommentList' value={formData.CommentList} onChange={handleChanges} />
                    </div>
                </div>

                <div className={styles.right_container}>
                    <div className={styles.comments}>
                        <h1>Project List</h1>
                        <input type="text" placeholder='Projects..' name='projectList' value={formData.projectList} onChange={handleChanges} />
                    </div>
                    <div className={styles.comments}>
                        <h1>Due Date</h1>
                        <input type="date" name='dueDate' value={formData.dueDate} onChange={handleChanges} />
                    </div>
                    <div className={styles.comments}>
                        <h1>Add Label</h1>
                        <input type="text" name='labels' value={formData.labels} onChange={handleChanges} placeholder="Add Labels Here.." />
                    </div>
                    <div className={styles.btn_container}>
                        <button onClick={() => { dispatch(handleUpdate(formData)); setUpdate(); }}>Update Save</button>
                        <button onClick={() => {setUpdate();dispatch(handleDelete(formData.id))} } name="delete">Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Form
