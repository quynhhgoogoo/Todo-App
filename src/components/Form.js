import React from 'react';

const Form = () => {
    const inputTextHandler = (e) =>{
        console.log(e);
    }; 

    return(
        <form>
            <input type="text" class="todo-input"/>
            
            <button class="todo-button" type="submit">
                <i class="fas fa-plus-squara"></i>
            </button>

            <div class="select">
                <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;