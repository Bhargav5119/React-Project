
// const initialData = {
//     list: [
//     ]
// }

const initialData = localStorage.getItem("Datas") ? {list: JSON.parse(localStorage.getItem("Datas"))}: {list:[]}

export default function datareducter(state = initialData, action) {
    switch (action.type) {
        case "Handle_Check": {
            const { id } = action.payload;
            let datas = state.list.map((data) => data.id === id ? { ...data, status: !data.status } : data)
            return {
                list: [
                    ...datas
                ]
            }
        }
        case "Add_Data": {
            const { taskName, taskDescription, checkList, CommentList, dueDate, projectList, assign, labels, status, id } = action.payload;
            return {
                list: [
                    ...state.list,
                    { taskName, taskDescription, checkList, CommentList, dueDate, projectList, assign, labels, status, id }
                ]
            }
        }
        case "Update_Data" : {
            const data = action.payload.data
            const oldData = state.list.filter((item) => item.id !== data.id)
            return{
                list : [
                    data,
                    ...oldData
                ]
            }
        }
        case "Delete_Data" : {
            const {id} = action.payload
            const data  = state.list.filter(item => item.id !== id)
            return{
                list: [
                    ...data
                ]
            }
        }
        default: return state
    }
}