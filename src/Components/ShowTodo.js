import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteTodo from '../Actions/DeleteTodo';

const ShowTodo= ()=>{
    const Todos = useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <div className='showTodo'>
            <ul>
                {
                    Todos.map(Todo=>
                        <li key={Todo.id}>
                            {Todo.Todo} <button onClick={()=>dispatch(DeleteTodo(Todo.id))}>X</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ShowTodo