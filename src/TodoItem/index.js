import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <li className='TodoItem'>
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <DeleteIcon
                onClick={props.onDelete}
            />
        </li>
    );
};

export default TodoItem;