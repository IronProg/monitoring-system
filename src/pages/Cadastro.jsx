import { useState } from 'react';
import { useNavigate } from 'react-router';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import { useAuth } from '../providers/AuthProvider';

const Cadastro = () => {
  const navigate = useNavigate();
  const { register, users } = useAuth();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const cadastro = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('As senhas não coincidem!');
      return;
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert('O número de telefone deve conter exatamente 11 dígitos, sem formatação (ex: 11987654321).');
      return;
    }

    const newUser = {
      email,
      password,
      userName,
      phone,
    };


    const emailExists = users.some((user) => user.email === newUser.email);

    if (emailExists) {
      alert('Este e-mail já está cadastrado!');
      return;
    }

    register(newUser);

    reset();

    navigate('/');
  };

  const reset = () => {
    setUserName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <section className="cadastro">
      <h1> Cadastre-se </h1>

      <form onSubmit={cadastro}>
        <input type="text" placeholder="NOME COMPLETO: " required onChange={(e) => setUserName(e.target.value)} value={userName} />
        <input type="email" placeholder="EMAIL: " required onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="tel" placeholder="TELEFONE: (opcional)" onChange={(e) => setPhone(e.target.value)} value={phone} />
        <input type="password" placeholder="SENHA: " required onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="password" placeholder="CONFIRMAR SENHA: " required onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} />

        <button type="submit"> Enviar </button>

        <hr />

        <h3>ou</h3>
        <div className="icon">
          <img src={google} alt="Cadastrar pelo Google" />
          <img src={facebook} alt="Cadastrar pelo Facebook" />
        </div>
      </form>
    </section>
  );
}

export default Cadastro;