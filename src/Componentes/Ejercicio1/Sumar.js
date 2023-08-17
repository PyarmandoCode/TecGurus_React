export function Sumar() { //Funcion recursiva
    function add(x, y) {
        return x + y
    }
    return (
        <div>
            <h1>{add(10, 30)}</h1>
        </div>
    )
}