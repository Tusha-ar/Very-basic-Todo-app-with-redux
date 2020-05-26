const DeleteTodo = (id) =>{
    return{
        type: 'DELETETODO',
        payload: id
    }
}

export default DeleteTodo