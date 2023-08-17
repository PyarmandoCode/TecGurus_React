import userEvent from "@testing-library/user-event";
import { useRef } from "react";

const Rectangulo_Area = () => {
    //Declarar las constantes de las directivas 
    const anchoRef = useRef();
    const altoRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
        const anchovalue = anchoRef.current.value;
        const altovalue = anchoRef.current.value;
        const r = anchovalue * altovalue;
        resultadoRef.current.innerHTML = r;

    }

    return <div>
        <input type="text" ref={anchoRef} />
        <input type="text" ref={altoRef} />
        <button onClick={calcular}>Enviar</button>
        <div ref={resultadoRef}></div>
    </div>

};

export default Rectangulo_Area;


