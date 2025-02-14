import React from 'react';

const Todo = ({text, todo, todos, setTodos}) =>{
    /*events*/
    const deleteHandler = () =>{
        /*filter(): removes elements if elemend id == todo id*/
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completedHandler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id == todo.id){
                return {
                    /*keep all the variables the same, only change the complete status*/
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;