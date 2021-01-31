export default (state, action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            let deleteData = { ...state,
                transactions: state.transactions.filter(item=>item.id!== action.payload)
            }
            localStorage.setItem("transactions", JSON.stringify(deleteData))
            return deleteData
        case 'ADD_TRANSACTION':
            let addData = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            localStorage.setItem("transactions", JSON.stringify(addData))
            return addData
        default:
            return state;
    }
}