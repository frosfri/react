import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState<number>(10);// troquei o nome string por number
  const [qty, setQty] = useState<number>(2);

  function calcTotal() {
    debugger; 
    const total = price + qty;
    return total;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Debug no React + Vite + TS</h1>

      <p>Preço (number): {price}</p> // a mesma coisa aqui 
      <p>Quantidade (number): {qty}</p> 

      <button onClick={() => console.log("Total:", calcTotal())}>
        Calcular total
      </button>
// apaguei a linha daqui que era o console.log
     
    </div>
  );
}
