import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todoArr, setTodoArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const token = localStorage.getItem('@isLogin');

  function saveText(e) {
    setTodo(e.target.value);
  }

  function saveCompleted(e) {
    if (isCompleted === false) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }

    console.log(isCompleted);
  }

  useEffect(() => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoArr(data);
      });
  }, [todoArr]);

  const createToDo = () => {
    if (todo === '') {
      return;
    }

    console.log(token);

    fetch(`https://www.pre-onboarding-selection-task.shop/todos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
      }),
    }).then((res) => {
      console.log(res.status);
      setTodo('');
    });
  };

  return (
    <div>
      <div>Todo</div>
      <div>
        <input type="text" onChange={saveText} value={todo} data-testid="new-todo-input"></input>
        <button onClick={createToDo} data-testid="new-todo-add-button">
          추가
        </button>
      </div>
      {todoArr.map((array, index) => (
        <div key={index}>
          <TodoList todo={array.todo} id={array.id}></TodoList>
        </div>
      ))}
    </div>
  );
}

export default Todo;
