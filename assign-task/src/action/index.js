export const handleStatus = (id) => {
    return {
        type: "Handle_Check",
        payload: {
            id: id,
        }
    }
}

export const Addtask = (formData) => {
    if(formData.taskName){
        return{
            type: "Add_Data",
        payload: {
            ...formData,
            status: false,
            id: new Date().getTime().toString(),
        }
        }
    }
}

export const handleUpdate = (data) => {
    return {
        type: "Update_Data",
        payload: {
            data: data
        }
    }
}

export const handleDelete = (id) => {
    return {
        type: "Delete_Data",
        payload: {
            id: id
        }
    }
}

export const handleTeamAdd = (member) => {
    if (member.name) {
        return {
            type: "Add_Team",
            payload: {
                name: member.name,
                id: new Date().getTime().toString(),
                gender: member.gender
            }
        }
    }
    // const payload = (member.name ?  {
    //     name : member.name,
    //     id: new Date().getTime().toString(),
    //     gender : member.gender
    // } : null)
    // return {
    //     type : "Add_Team",
    //     payload : payload
    // }
}

export const removeTeammember = (id) => {
    return {
        type: "Remove_member",
        payload: {
            id: id
        }
    }
}