import React, { useState, useEffect } from 'react'
import styles from "./TeamMember.module.scss"
import { AiOutlinePlus } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { Male, Female } from "../../images"
import AddNewMember from './AddNewMember/AddNewMember'
import { useDispatch } from 'react-redux'
import { removeTeammember } from '../../action'

const TeamMember = () => {
  const [addteam, setTeam] = useState(false)
  const dispatch = useDispatch()
  const teamData = useSelector((state) => state.Teamreducer.List)
  useEffect(() => {
    localStorage.setItem("teamData", JSON.stringify(teamData))
  }, [teamData])
  return (
    <div className={styles.teamMember}>
      <div className={styles.container} >
        <h1>Team Member</h1>
        <h1 onClick={() => { setTeam(true) }}><AiOutlinePlus /> Add Team Member</h1>
      </div>

      <div className={styles.teamContainer}>
        {teamData &&
          teamData.map((data, index) => (
            <div key={index}>
              <div className={styles.teamData}>
                <div className={styles.title}>
                  <img src={data.gender === "male" ? Male : data.gender === "female" ? Female : null} alt="person" />
                  <h1>{data.name}</h1>
                </div>
                <div>
                  <button onClick={() => { dispatch(removeTeammember(data.id)) }}>Remove</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {
        addteam && <AddNewMember setTeam={setTeam} />
      }
    </div>
  )
}

export default TeamMember
