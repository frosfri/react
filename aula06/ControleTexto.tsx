import { useState } from "react";

export default function ControleTexto() {
  const [texto, setTexto] = useState<string>("");
  const [saida, setSaida] = useState<string>("...");

  function aoDigitar(e: React.ChangeEvent<HTMLInputElement>): void {
    const valor = e.target.value;
    setTexto(valor);
    setSaida(valor.trim() === "" ? "vazio" : valor.toLowerCase());
  }

  function limpar(): void {
    setTexto("");
    setSaida("...");
  }

  return (
    <div>
      <h2>Controle de Texto</h2>

      <input value={texto} onChange={aoDigitar} />
      <pre>{saida}</pre>

      <button onClick={limpar}>Limpar</button>
    </div>
  );
}
