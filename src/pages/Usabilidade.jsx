const Usabilidade = () => {
  return (
    <>
      <section
        id="usabilidade"
        style={{
          maxWidth: 800,
          margin: '20px auto',
          fontFamily: 'Arial, sans-serif',
          lineHeight: 1.6,
          padding: '0 15px'
        }}
      >
        <h2>Usabilidade no Nosso Site</h2>
        <div className="container">
          <h2>Introdução</h2>
          <p>
            <b>A usabilidade</b> é um dos pilares fundamentais para o desenvolvimento do nosso site, pois acreditamos que a experiência do usuário deve ser sempre simples, intuitiva e agradável. Uma boa usabilidade garante que qualquer pessoa, independentemente do seu nível de conhecimento em tecnologia, consiga navegar, encontrar informações e interagir com o conteúdo de maneira eficiente e sem dificuldades.
          </p>

          <p>
            <b>Neste site</b>, aplicamos diversas práticas para facilitar a navegação e o uso das funcionalidades, com foco em clareza, acessibilidade e feedback constante. Os menus são organizados de forma lógica e visível, para que o usuário saiba sempre onde está e como retornar às páginas anteriores. Todos os botões e links possuem destaque visual e respostas imediatas, ajudando o usuário a entender o que pode ser clicado e qual será o resultado dessa ação.
          </p>

          <p>
            <b>Nos formulários</b>, por exemplo, implementamos validações que orientam o usuário a preencher os campos corretamente, mostrando mensagens de erro claras e localizadas logo abaixo dos campos em questão. Isso evita frustrações, economiza tempo e aumenta a confiança do usuário em nosso sistema. Além disso, após o envio bem-sucedido, uma mensagem de confirmação é exibida, garantindo que o usuário saiba que sua mensagem foi recebida e será respondida.
          </p>

          <p>
            <b>Também nos preocupamos com a acessibilidade</b>, procurando garantir que pessoas com diferentes necessidades possam utilizar o site sem barreiras. Isso inclui um layout responsivo, que se adapta perfeitamente a diferentes tamanhos de tela, e o uso de cores e contrastes que facilitam a leitura.
          </p>

          <p>
            <b>Por fim</b>, nosso compromisso é com a melhoria contínua da usabilidade, <b>ouvindo o feedback dos usuários</b> para tornar o site cada vez mais eficiente e amigável. Afinal, um site bem usável não é apenas uma ferramenta digital, mas uma experiência que conecta pessoas e facilita a comunicação.
          </p>
        </div>
      </section>
    </>
  )
}

export default Usabilidade;
