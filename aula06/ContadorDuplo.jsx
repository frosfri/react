import { useState } from "react";

export default function ContadorDuplo() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(10);

  return (
    <div>
      <h2>Contador Duplo</h2>

      <p>A: {a}</p>
      <p>B: {b}</p>

      <button onClick={() => setA(a + 1)}>Aumentar A</button>
      <button onClick={() => setB(b - 1)}>Diminuir B</button>
    </div>
  );
}
