import { NavLink } from "react-router";

const Sobre = () => {
  return (
    <>
      <section className="sobre-section">
        <h2>Sobre o Sistema de Monitoramento Agrícola Inteligente</h2>
        <p className="sobre-description">
          O Sistema de Monitoramento Agrícola Inteligente é uma plataforma inovadora que utiliza Inteligência
          Artificial para ajudar pequenos e médios agricultores a aumentarem sua produtividade de forma
          sustentável.
        </p>

        <h3>Objetivos</h3>
        <ul>
          <li><i className="fas fa-check"></i>Aumentar a produtividade agrícola</li>
          <li><i className="fas fa-check"></i>Reduzir desperdícios de recursos naturais</li>
          <li><i className="fas fa-check"></i>Aplicar tecnologias inovadoras no campo</li>
        </ul>

        <h3>Como Funciona?</h3>
        <p>
          Com o uso de sensores IoT e IA, o sistema coleta e analisa dados climáticos e do solo, oferecendo
          recomendações personalizadas para os agricultores.
        </p>

        <div className="sobre-icons">
          <div>
            <i className="fas fa-cloud-sun"></i>
            <div className="icon-text">
              <p>Monitoramento Climático</p>
            </div>
          </div>
          <div>
            <i className="fas fa-seedling"></i>
            <div className="icon-text">
              <p>Análise de Solo</p>
            </div>
          </div>
          <div>
            <i className="fas fa-robot"></i>
            <div className="icon-text">
              <p>Inteligência Artificial</p>
            </div>
          </div>
        </div>

        <NavLink to={'/contato'} className={'cta-button'}>
          Entre em Contato
        </NavLink>
      </section>
    </>
  )
}

export default Sobre;
