import "../assets/css/curso.css";

export default function Curso() {
  return (
    <div className="curso">

      <h1>Como escolher uma casa</h1>

      <div className="card">
        <h2>Localização</h2>
        <p>Verifique se o imóvel está perto de escolas, mercados e transporte.</p>
      </div>

      <div className="card">
        <h2>Preço</h2>
        <p>Compare o preço do imóvel com outros da mesma região.</p>
      </div>

      <div className="card">
        <h2>Estrutura</h2>
        <p>Observe se a casa possui boa ventilação, iluminação e estrutura.</p>
      </div>

      <div className="card">
        <h2>Documentação</h2>
        <p>Confirme se o imóvel possui escritura e registro em cartório.</p>
      </div>

    </div>
  );
}