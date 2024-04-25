import React, { useState, useEffect, useReducer } from 'react';

const APP_KEY = 'sampleApp';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    todos: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: todoValue });
    setTodoValue(''); // Clear input field after adding todo
  };

  const removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  const [todoValue, setTodoValue] = useState('');

  const onInput = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={todoValue} onInput={onInput} />
      <button id="touroku" onClick={addTodo}>登録ボタン</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>削除ボタン</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;