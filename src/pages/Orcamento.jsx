import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";

const ORCAMENTOS_KEY = "orcamentos";

const Orcamento = () => {
  const { loggedUser } = useAuth();

  const [nome, setNome] = useState(loggedUser?.userName || "");
  const [email, setEmail] = useState(loggedUser?.email || "");
  const [telefone, setTelefone] = useState("");
  const [fazenda, setFazenda] = useState("");
  const [hectares, setHectares] = useState("");
  const [servicos, setServicos] = useState({
    monitoramento: false,
    analiseSolo: false,
    ia: false,
  });
  const [mensagem, setMensagem] = useState("");

  const handleServicosChange = (event) => {
    const { name, checked } = event.target;
    setServicos((prevServicos) => ({
      ...prevServicos,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orcamentosAnterioresJson = localStorage.getItem(ORCAMENTOS_KEY);
    const orcamentosAnteriores = orcamentosAnterioresJson
      ? JSON.parse(orcamentosAnterioresJson)
      : [];

    const novoOrcamento = {
      id: new Date().getTime(),
      userEmail: loggedUser?.email,
      nome,
      email,
      telefone,
      fazenda,
      hectares: Number(hectares),
      servicos,
      mensagem,
      dataSolicitacao: new Date().toISOString(),
    };

    const novaListaDeOrcamentos = [...orcamentosAnteriores, novoOrcamento];

    localStorage.setItem(ORCAMENTOS_KEY, JSON.stringify(novaListaDeOrcamentos));

    alert(
      "Sua solicitação de orçamento foi enviada com sucesso! Nossa equipe entrará em contato em breve."
    );

    setTelefone("");
    setFazenda("");
    setHectares("");
    setServicos({ monitoramento: false, analiseSolo: false, ia: false });
    setMensagem("");
  };

  return (
    <section className="orcamento">
      <h2>Solicite um Orçamento Personalizado</h2>
      <p>
        Interessado em levar a tecnologia para o seu campo? Preencha o
        formulário abaixo e nossa equipe entrará em contato com uma proposta sob
        medida para sua necessidade.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <input
          type="text"
          placeholder="Nome do Produtor / Contato"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          disabled={!!loggedUser}
        />
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={!!loggedUser}
        />
        <input
          type="tel"
          placeholder="Telefone / WhatsApp"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome da Fazenda/Propriedade"
          value={fazenda}
          onChange={(e) => setFazenda(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tamanho da propriedade (em hectares)"
          value={hectares}
          onChange={(e) => setHectares(e.target.value)}
          required
          min="1"
        />

        <fieldset
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <legend>Serviços de Interesse:</legend>
          <div>
            <input
              type="checkbox"
              id="monitoramento"
              name="monitoramento"
              checked={servicos.monitoramento}
              onChange={handleServicosChange}
            />
            <label htmlFor="monitoramento"> Monitoramento Climático</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="analiseSolo"
              name="analiseSolo"
              checked={servicos.analiseSolo}
              onChange={handleServicosChange}
            />
            <label htmlFor="analiseSolo"> Análise de Solo e Cultivo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ia"
              name="ia"
              checked={servicos.ia}
              onChange={handleServicosChange}
            />
            <label htmlFor="ia">
              {" "}
              Inteligência Artificial para Tomada de Decisão
            </label>
          </div>
        </fieldset>

        <textarea
          placeholder="Descreva sua necessidade ou deixe uma mensagem (opcional)"
          rows="5"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>

        <button type="submit">Enviar Solicitação</button>
      </form>
    </section>
  );
};

export default Orcamento;
