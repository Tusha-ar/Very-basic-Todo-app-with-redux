import React from 'react';
import './App.css';
import Input from './Components/Input';
import ShowTodo from './Components/ShowTodo';
import './Components/Style/main.scss'

function App() {
  return (
    <div className="App">
      <h1>TODOS:</h1>
      <Input/>
      <ShowTodo/>
    </div>
  );
}

export default App;
