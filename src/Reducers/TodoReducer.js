const TodoReducer = (state=[], actions) =>{
    switch(actions.type){
        case 'ADDTODO':
            return [
                ...state,
                {
                    id: Math.random(),
                    Todo: actions.payload
                }
            ]
        case 'DELETETODO':
            return state.filter(todo=> todo.id !== actions.payload)
        default:
            return state
    }
}

export default TodoReducer