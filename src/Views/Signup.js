import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  const isValid = email.includes('@') && password.length > 7;

  function onSubmit(e) {
    e.preventDefault();

    if (email === '') {
      alert('아이디를 입력해주세요.');

      return false;
    }

    if (password === '') {
      alert('비밀번호를 입력해주세요.');

      return false;
    }

    fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 201) {
        navigate('/signin');
      }
    });
  }

  return (
    <div className="signup">
      <div>회원가입 페이지</div>
      <input
        data-testid="email-input"
        className="emailInput"
        type="email"
        value={email}
        onChange={saveEmail}
      ></input>
      <input
        data-testid="password-input"
        className="passwordInput"
        type="password"
        value={password}
        onChange={savePassword}
      ></input>
      {isValid ? (
        <button data-testid="signin-button" id="signin-btn" onClick={onSubmit}>
          로그인
        </button>
      ) : (
        <button data-testid="signin-button" id="signin-btn" onClick={onSubmit} disabled>
          로그인
        </button>
      )}
      <Link to="/">뒤로가기</Link>
    </div>
  );
}

export default Signup;
