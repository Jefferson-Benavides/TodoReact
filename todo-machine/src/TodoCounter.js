import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ total, completed }) => {

    // Una manera distinta de obtener props
    // const { total, completed } = props

    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
    );
};

export {TodoCounter};