import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import TodoItem from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { Modal } from '../Modal';
import '../CreateTodoButton/CreateTodoButton.css';
import '../TodoList/TodoList.css';

const AppUI = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        //etiqueta React.Fragment que equivale a un div
        <React.Fragment>
            <TodoCounter
            />
            <TodoSearch
            />
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando, no desesperes</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            )}
            <CreateTodoButton 
            setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
};

export { AppUI };