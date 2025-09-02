import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { useState } from 'react';
import { LOGGED_USER_KEY, USERS_KEY } from '../globals';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loadUsers = () => {
    const usersJson = localStorage.getItem(USERS_KEY);

    return JSON.parse(usersJson);
  }

  const loginUser = (user) => {
    localStorage.setItem(LOGGED_USER_KEY, user);
  }

  const login = (e) => {
    e.preventDefault();

    const registeredUsers = loadUsers();

    const user = registeredUsers.filter((user) => user.email === email && user.password === password)

    if (user) {
      loginUser(user);
      reset();
    } else {
      setError('Usuário não encontrado!');
      reset();
    }

    reset();

    return false;
  }

  const reset = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <section className="cadastro">
      <h1> Cadastre-se </h1>

      <form onSubmit={login}>
        <input type="email" placeholder="EMAIL: " required onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="SENHA: " required onChange={(e) => setPassword(e.target.value)} value={password} />

        { !!error && (
          <p>
            <small>
              {error}
            </small>
          </p>
        )}

        <button type="submit"> Enviar </button>
      </form>
    </section>
  )
}

export default Login;
