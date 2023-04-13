import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import Todo from './Views/Todo';
import EmptyPage from './Views/EmptyPage';

function App() {
  const token = localStorage.getItem('@isLogin');

  return (
    <BrowserRouter>
      <div className="App">
        {token ? (
          <Routes>
            <Route exact path="/" element={token ? <Todo /> : <Signin />}></Route>
            <Route path="/Todo" element={<Todo />}></Route>
            <Route path="*" element={<Todo />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={token ? <Todo /> : <Signin />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={<Signin />}></Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
