import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import TodoItem from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import './CreateTodoButton.css'
import './TodoList.css'

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]
function App() {
  return (
    //etiqueta React.Fragment que equivale a un div
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
