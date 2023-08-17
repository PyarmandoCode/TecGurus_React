import React from "react"; //Importar la biblioteaca react
import ReactDOM from "react-dom/client"; //Modificar el 
import JSXcodigo from './Componentes/Ejercicio1/Variables'
import { Sumar } from './Componentes/Ejercicio1/Sumar'
import { BienvenidaUsuario } from './Componentes/Ejercicio2/Propsdemo'


const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<h1>Hola Mundo Desde React </h1>) //me va devolver un aplicacion de react principal llamada elemento raiz


//Creando mi primer componente
function Saludar() {
    return <h1>Este es un componente en React</h1>
}

//root.render(Saludar()) //Como una funcion
//root.render(<Saludar></Saludar>) //Como una Interface
//root.render(<Saludar/>) //Como una Interface

//Reutilzar un Componente Self Closing Tags
// root.render(<div>
//     {Saludar()}
//     {Saludar()}
//     {Saludar()}
//     {Saludar()}
// </div>


function OtraFuncion() {
    return <div>
        <h1>Este es un componente</h1>
        <p>lorem 123</p>
    </div>
}

// root.render(<div>
//      <OtraFuncion/>
// </div>

//JSX COMBINACION DE html+Javascript

function JSXDemo() {
    //Codigo JS + HTML = JSX
    const name = "Armando Ruiz"
    return <h1>{name}</h1>
}

// root.render(
//     <div>
//         <JSXDemo />
//     </div>
// )


// root.render(
//     <div>
//         <Sumar/>
//     </div>
// )


function Bienvenida() {
    const name = "Lucia"
    const rol = "Admin"
    return (
        <>
            <BienvenidaUsuario name={name} rol={rol} />
        </>
    )
}


root.render(
    <div>
        <Bienvenida/>
    </div>
)