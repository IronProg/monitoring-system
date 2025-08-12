import { useEffect, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [erroNome, setErroNome] = useState(null);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroMensagem, setErroMensagem] = useState(null);
  const [alterado, setAlterado] = useState(false);

  const submit = () => {
    validaFormulario(true);
  }

  const validaFormulario = (submit = false) => {
    const tempErroNome = !nome || nome.trim().split(/\s+/).length < 2
      ? 'Digite seu nome completo (nome e sobrenome).'
      : null;

    const tempErroEmail = !email || !emailRegex.test(email)
      ? 'Digite um e-mail válido.'
      : null;

    const tempErroMensagem = !mensagem || mensagem.trim().length < 10 || mensagem.trim().length > 500
      ? 'A mensagem deve ter entre 10 a 500 caracteres.'
      : null;

    if (submit) {
      if (!tempErroNome && !tempErroEmail && !tempErroMensagem) {
        alert('Mensagem enviada com sucesso!');
      }

      setAlterado(true);
    }


    setErroNome(tempErroNome);
    setErroEmail(tempErroEmail);
    setErroMensagem(tempErroMensagem);
  }

  useEffect(() => {
    if (alterado) { validaFormulario(); }
  }, [nome, email, mensagem])


  return (
    <form id="formContato" noValidate>
      <label htmlFor="nome">Nome Completo:</label>
      <input className={!erroNome ? '' : 'is-invalid'} type="text" required onChange={(e) => setNome(e.target.value)} value={nome} />
      <small className="erro" id="erroNome">
        { erroNome }
      </small>

      <label htmlFor="email">E-mail:</label>
      <input className={!erroEmail ? '' : 'is-invalid'} type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <small className="erro" id="erroEmail">
        { erroEmail }
      </small>

      <label htmlFor="assunto">Assunto:</label>
      <input type="text" id="assunto" onChange={(e) => setAssunto(e.target.value)} value={assunto} />

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea className={!erroMensagem ? '' : 'is-invalid'} id="mensagem" rows="5" onChange={(e) => setMensagem(e.target.value)} value={mensagem} />
      <small className="erro" id="erroMensagem">
        { erroMensagem }
      </small>

      <button type="button" onClick={submit}>Enviar</button>
    </form>
  )
}

export default FormContato;