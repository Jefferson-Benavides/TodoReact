import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la llorona', completed: true }
// ]

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;


  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue

  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stgringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stgringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ]
}

  function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [patito, savePatito] = useLocalStorage('PATITO', 'Fernando');

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {

      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
    }

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);

      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;

      saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);

      const newTodos = [...todos];
      //La función splice quita elementos desde un posición (arg1) la
      //cantidad que necesitemos (arg2)
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    return [
      <p> {patito} </p>,
      <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />]
    ;
  }

  export default App;
