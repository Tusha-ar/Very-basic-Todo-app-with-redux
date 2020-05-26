import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from '../Actions/AddTodo';


const Input = () =>{
    const[Todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const Changehandler = (e) =>{
        setTodo(e.target.value)
    } 
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(AddTodo(Todo));
    }
    return(
        <div className='input'>
            <form onSubmit={submitHandler}>
                <input type='text' onChange={Changehandler} className='input_field'/>
                <input type='submit' className='button'/>
            </form>
        </div>
    )
}


export default Input