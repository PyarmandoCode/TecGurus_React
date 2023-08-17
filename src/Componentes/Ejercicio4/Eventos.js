//Los Hooks 
//userRef.-Es Un Hook que guarda la referncia del nodo dentro del dom

import { useRef } from "react";

const App = () => {

    //La Logica de la Aplicacion

    const eurosRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
        const eurosValue = eurosRef.current.value;
        const dolares = eurosValue * 2;
        resultadoRef.current.innerHTML = dolares;

    }
    //dentro del Componente App hay un return que me devuelve codigo JSX
    return <div>
        <input type="text" ref={eurosRef} />
        <button onClick={calcular}>Enviar</button>
        <div ref ={resultadoRef }></div>

    </div>

};

export default App;