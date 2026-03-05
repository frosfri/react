import { useState } from "react";

export default function ResumoFinal() {
  const [valor, setValor] = useState<number>(0);
  const [historico, setHistorico] = useState<string[]>([]);

  function aumentar(): void {
    const novo = valor + 1;
    setValor(novo);
    setHistorico([...historico, `Aumentou para ${novo}`]);
  }

  function zerar(): void {
    setValor(0);
    setHistorico([]);
  }

  return (
    <div>
      <h2>Resumo Final</h2>

      <p>Valor: {valor}</p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={zerar}>Zerar</button>

      <ul>
        {historico.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
