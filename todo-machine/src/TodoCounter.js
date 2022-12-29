import React from 'react';
import './TodoCounter.css';

// ejemplo de implementación de estilos en React
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// };

const TodoCounter = () => {
    return (
        <h2 className='TodoCounter'>Has completado 2 de 3 TODOs</h2>
    );
};

export {TodoCounter};