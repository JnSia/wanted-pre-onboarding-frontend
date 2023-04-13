import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
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

    fetch(`https://www.pre-onboarding-selection-task.shop/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('@isLogin', data.access_token);
        navigate('/Todo');
      });
  }

  return (
    <div className="signin">
      <div>로그인 페이지</div>
      <input
        data-testid="email-input"
        type="email"
        onChange={saveEmail}
        className="emailInput"
      ></input>
      <input
        data-testid="password-input"
        type="password"
        onChange={savePassword}
        className="passwordInput"
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
      <Link to="/Signup">회원가입</Link>
    </div>
  );
}

export default Signin;
