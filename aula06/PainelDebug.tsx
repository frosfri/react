import { useState } from "react";

export default function PainelDebug() {
  const [status, setStatus] = useState<string>("parado");
  const [vezes, setVezes] = useState<number>(0);

  function alternar(): void {
    setStatus(status === "parado" ? "rodando" : "parado");
    setVezes(vezes + 1);
  }

  function resetar(): void {
    setStatus("parado");
    setVezes(0);
  }

  return (
    <div>
      <h2>Painel de Debug</h2>
      <p>Status: {status}</p>
      <p>Cliques: {vezes}</p>

      <button onClick={alternar}>Alternar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}
