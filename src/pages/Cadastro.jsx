import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

function Cadastro() {
  return (
    <section className="cadastro">
    <h1> Cadastre-se </h1>

    <form action="#">
      <input type="text" id="nome" name="nome" placeholder="NOME COMPLETO: " required />
      <input type="email" id="email" name="email" placeholder="EMAIL: " required />
      <input type="number" id="telefone" name="telefone" placeholder="TELEFONE: " required />
      <input type="password" id="senha" name="senha" placeholder="SENHA: " required />
      <input type="password" id="c_senha" name="c_senha" placeholder="CONFIRMAR SENHA: " required />

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
