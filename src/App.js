import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  /*States*/
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  /*Effects*/
  useEffect(()=>{
    getLocalTodos();
  }, []);

  useEffect( () => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  /*Functions*/
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  /*Save local todos*/
  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') == null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

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
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
};

export default App;
