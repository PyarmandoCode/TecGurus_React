//🤓 <Fragment> <>..</> Agrupar elementos sin uso de un nodo que los envuelva//

import { Fragment } from "react"

export default function Blog() {
    return (
        <>
            <Post title="Como Instalar React sin Problemas" body="Si quieres crear una aplicación o un sitio web completamente con React, inicia un nuevo proyecto React." />

            <Post title="Como Instalar React sin Problemas" body="Si quieres crear una aplicación o un sitio web completamente con React, inicia un nuevo proyecto React." />

            <Post title="Como Instalar React sin Problemas" body="Si quieres crear una aplicación o un sitio web completamente con React, inicia un nuevo proyecto React." />

        </>
    )
}


function Post({ title, body }) {
    return (
        <Fragment>
            <PosTitle title={title} />
            <PostBody body={body} />
        </Fragment>
    )
}


function PosTitle({ title }) {
    return <h1>{title}</h1>
}

function PostBody({ body }) {
    return (
        <article>
            <p>{body}</p>
        </article>
    )
}