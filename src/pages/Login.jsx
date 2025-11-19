import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, users } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(user);
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
      <form onSubmit={handleLogin}>
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