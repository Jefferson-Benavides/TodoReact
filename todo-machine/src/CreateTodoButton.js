import React from 'react';

const CreateTodoButton = () => {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button 
        className='CreateTodoButton'
        onClick={() => onClickButton('Aquí se debería ver un modal')}
        >+</button>
    );
};

export { CreateTodoButton };