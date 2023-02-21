// const initialTeam = {
//     List : [

//     ]
// }
// const initialTeam = localStorage.getItem("TeamData") ? {list:JSON.parse(localStorage.getItem("TeamData"))}: {list:[ ]}
// let initialTeam
// if (localStorage.getItem("TeamData")) {
//     initialTeam = { list: JSON.parse(localStorage.getItem("TeamData")) }
// } else {
//     initialTeam = { list: [{
//         name: "",
//         gender: ""
//     }
//     ] }
// }


const initialTeam = localStorage.getItem("teamData") ? {List : JSON.parse(localStorage.getItem("teamData"))} : {List : []}

export default function Teamreducer(state = initialTeam, action) {
    switch (action.type) {
        case "Add_Team": {
            const { gender, name, id } = action.payload
            return {
                List: [
                    ...state.List,
                    { gender, name, id }
                ]
            }
        }
        case "Remove_member": {
            const { id } = action.payload
            const member = state.List.filter(item => item.id !== id)
            return {
                List: [
                    ...member
                ]
            }
        }
        default: return state

    }
}