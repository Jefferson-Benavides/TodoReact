import React from 'react';

const CreateTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(true)
    }

    return (
        <button
            className='CreateTodoButton'
            onClick={onClickButton}
        >+</button>
    );
};

export { CreateTodoButton };