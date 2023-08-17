const products = [

    { Codigo: '100', Nombre: 'React', Estado: true },
    { Codigo: '200', Nombre: 'Angular', Estado: true },
    { Codigo: '300', Nombre: 'Vue', Estado: false },
    { Codigo: '400', Nombre: 'Golang', Estado: false },
    { Codigo: '500', Nombre: 'Python', Estado: true }
]

export default function Productos() {
    //Map me permite reccorer los valores de una rray y capturar el indice donde
    //lo puedo almacenar en la propiedad KEY 
    const listitems = products.map(product =>
        <li
            key={product.Codigo}
            style={{
                color: product.Estado ? 'blue' : 'red'
            }}
        >
            {product.Nombre}
        </li>
    );
    return (
        <ul>{listitems}</ul>
    )
}