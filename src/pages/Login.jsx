import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LOGGED_USER_KEY, USERS_KEY } from '../globals';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loadUsers = () => {
    const usersJson = localStorage.getItem(USERS_KEY);
    return JSON.parse(usersJson);
  };

  const loginUser = (user) => {
    localStorage.setItem(LOGGED_USER_KEY, user);
  };

  const login = (e) => {
    e.preventDefault();

    const registeredUsers = loadUsers();

    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      loginUser(user);
      navigate('/');
    } else {
      setError('E-mail ou senha incorretos.');
    }

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="EMAIL:"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="SENHA:"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {error && <span style={{ color: 'red' }}>{error}</span>}

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default Login;