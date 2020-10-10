import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) =>{
        console.log(e);
        setInputText(e.target.value);
    };
    
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            /*pass the todos which are already in the list*/
            ...todos, {text: inputText, completed: false, id:Math.random()*1000}
        ]);
        /*reset state*/
        setInputText('');
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select className="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;