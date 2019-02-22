const addTodoList = (state=[],action={})=>{
    switch(action.type){
        case 'ADD_TODO':
            //对象的深拷贝
            // state = {}
            // const newState = Object.assign({},state)
            // newState.push(action.payload)

            //数组的深拷贝
            const newState = [...state];
            newState.push(action.payload)
            return newState
        default :
            return state
    }
}

export default addTodoList