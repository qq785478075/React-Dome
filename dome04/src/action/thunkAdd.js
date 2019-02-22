const addTodoList = (state = 0,action = {})=>{
    switch(action.type){
        case 'ADD_ONE':
            const newState = state + parseFloat(action.thunkNum)
            return newState
        default :
            return state
    }
}

export default addTodoList