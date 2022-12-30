import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
    const onComplete = () => {
        alert('Aquí completaste el todo ' + props.text)
    }
    const onDelete = () => {
        alert('Aquí borraste el todo ' + props.text)
    }
    return (
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete} >D</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className='Icon Icon-delete'
            onClick={onDelete}
            >X</span>
        </li>
    );
};

export default TodoItem;