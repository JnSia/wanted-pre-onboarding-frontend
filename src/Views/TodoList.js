import React, { useState } from 'react';

function TodoList(props) {
  const [todo, setTodo] = useState('');
  const [modify, setModify] = useState(false);
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
  }

  const deleteToDo = (e) => {
    const deleteID = e.target.value;

    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${deleteID}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 204) {
        alert('삭제되었습니다.');
      }
    });
  };

  const modifyTodo = (e) => {
    setModify(true);
  };

  const cancelModify = (e) => {
    setModify(false);
  };

  const updateTodo = (e) => {
    const updateID = e.target.value;

    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${updateID}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
        isCompleted,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setTodo('');
        setModify(false);
      }
    });
  };

  return modify ? (
    <li>
      <label>
        <input type="checkbox" onClick={saveCompleted} />
        <input data-testid="modify-input" onChange={saveText} />
      </label>
      <button data-testid="submit-button" onClick={updateTodo} value={props.id}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={cancelModify}>
        취소
      </button>
    </li>
  ) : (
    <li>
      <label>
        <input type="checkbox" onClick={saveCompleted} />
        <span>{props.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={modifyTodo}>
        수정
      </button>
      <button data-testid="delete-button" onClick={deleteToDo} value={props.id}>
        삭제
      </button>
    </li>
  );
}

export default TodoList;
