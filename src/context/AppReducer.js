export default (state, action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            var data = { ...state,
                transactions: state.transactions.filter(item=>item.id!== action.payload)
            }
            localStorage.setItem("transactions", JSON.stringify(data))
            return data
        case 'ADD_TRANSACTION':
            var data = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            localStorage.setItem("transactions", JSON.stringify(data))
            return data
        default:
            return state;
    }
}