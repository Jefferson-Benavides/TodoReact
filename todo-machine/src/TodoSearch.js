import React from 'react';
import './TodoSearch.css'

const TodoSearch = () => {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return [
        <input 
        className='TodoSearch' 
        placeholder='Cebolla' 
        value={searchValue}
        onChange={onSearchValueChange}
        //Solo prueba de como cambiar un estado
        // onChange={() => setState('Jefferson')}
        />,
        <p>
            {searchValue}
        </p>
    ];
};

export { TodoSearch };


// Forma de trabajo usando clases y no hooks
// class Componente extends React.Component {
//     constructor(){
//         this.state = {
//             patito: 'Juan'
//         };
//     }

//     render(){
//         return (
//             <div
//             onClick={() => this.setState('Enrique')}
//             >
//             {this.state.patito}
//             </div>

//         )
//     }
// }
