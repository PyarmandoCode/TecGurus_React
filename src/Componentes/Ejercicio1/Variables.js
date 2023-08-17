//Utilizar Constantes,Variables , Condicionales , Operadores Ternarios
function JSXcodigo() {
    const name = "Armando"
    const numero = 30
    let aprendi = true
    // if (aprendi) {
    //     return <h1>Aprendio React</h1>
    // } else {
    //     return <h2>No Aprendio React</h2>
    // }
    //Operadores Ternarios
    // return <h1> {name} {numero} {20+20} {aprendi} </h1>
    return <h1>{aprendi ? "Aprendio React":"No Aprendio React" }</h1>
}

export default JSXcodigo;