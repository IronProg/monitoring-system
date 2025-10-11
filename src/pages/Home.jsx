import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <h2>Bem-vindo ao Futuro da Agricultura</h2>
          <p>Monitore suas plantações com inteligência e aumente sua produtividade.</p>

          <iframe
            src="https://www.youtube.com/embed/0-HGp8A-6DM?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen"
          >
          </iframe>

          <NavLink to={'/funcionalidades'} className={'btn'}>
            Saiba mais
          </NavLink>
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
