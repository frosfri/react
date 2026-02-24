import { useState } from "react";

export default function App() { 
  const [count, setContador] = useState(0);

    function Aumentar() {
        setContador(count + 1);

    }
    function Diminuir() {
        setContador(count - 1);
    }
    function Zerar() {
        setContador(0);
    }
    function Dobrar() {
        setContador(count * 2);
    }  
    function Dividir() {
        setContador(count / 2);
    }  // adicionei o dividir 
    return (

        <div>
            <h1>Contador: {count}</h1>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Diminuir}>Diminuir</button>
            <button onClick={Zerar}>Zerar</button>
            <button onClick={Dobrar}>Dobrar</button>
            <button onClick={Dividir}>Dividir</button> // aqui tambem
        </div>
    )


    














}
