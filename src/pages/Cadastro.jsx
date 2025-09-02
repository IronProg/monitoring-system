import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { useState } from 'react';
import { LOGGED_USER_KEY, USERS_KEY } from '../globals';
import { useNavigate } from 'react-router';


function Cadastro() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const loadUsers = () => {
    const usersJson = localStorage.getItem(USERS_KEY);

    return JSON.parse(usersJson);
  }

  const loginUser = (user) => {
    localStorage.setItem(LOGGED_USER_KEY, user);
  }

  const cadastro = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      userName
    }

    const prevUsers = loadUsers();

    if (!prevUsers) {
      localStorage.setItem(USERS_KEY, JSON.stringify([newUser]));
    } else {
      localStorage.setItem(USERS_KEY, JSON.stringify([...prevUsers, newUser]));
    }

    loginUser();

    reset();

    navigate('/');

    return false;
  }

  const reset = () => {
    setUserName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setPasswordConfirm('');
  }

  return (
    <section className="cadastro">
      <h1> Cadastre-se </h1>

      <form onSubmit={cadastro}>
        <input type="text" placeholder="NOME COMPLETO: " required onChange={(e) => setUserName(e.target.value)} value={userName} />
        <input type="email" placeholder="EMAIL: " required onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="number" placeholder="TELEFONE: (opcional)" onChange={(e) => setPhone(e.target.value)} value={phone} />
        <input type="password" placeholder="SENHA: " required onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="password" placeholder="CONFIRMAR SENHA: " required onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} />

        <button type="submit"> Enviar </button>

        <hr/>

        <h3>ou</h3>
        <div className="icon">
          <img src={google} alt="Cadastrar pelo Google" />
          <img src={facebook} alt="Cadastrar pelo Facebook" />
        </div>
      </form>
    </section>
  )
}

export default Cadastro;
