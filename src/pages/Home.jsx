import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <h2>Bem-vindo ao Futuro da Agricultura</h2>
          <p>Monitore suas plantações com inteligência e aumente sua produtividade.</p>
          <NavLink to={'/funcionalidades'} className={'btn'}>
            Saiba mais
          </NavLink>
          <a href="https://youtu.be/sz-3YSf6oNo" target="_blank"><p> Link para o Pitch</p></a>
        </section>

        <section className="destaques">
          <h3>Principais benefícios:</h3>
          <ul>
            <li>Monitoramento climático em tempo real</li>
            <li>Análise de solo e cultivo inteligente</li>
            <li>Recomendações personalizadas via IA</li>
            <li>Aplicativo simples e intuitivo</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Home;
