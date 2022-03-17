import React from 'react';

const TodoForm = ({ addTodo }) => {

    const [ userInput, setUserInput ] = React.useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Todo..."/>
            <button>Submit</button>
        </form>
    );
};

export default TodoForm;