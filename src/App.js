import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  /*Set and update the input text/ Need to be reseted everytime*/
  const [inputText, setInputText] = useState("");

  /*Set and update the todo list*/
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
};

export default App;
