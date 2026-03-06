
import { useEffect, useState } from "react"
import { getData, deleteData, patchData } from "../services/fetch"
import '../styles/ListaProductos.css'

function ListaProductos() {

    const [productos, setProductos] = useState([])

    const [idEditar,setIdEditar] = useState("")
    const [mostrarEditar,setMostrarEditar] = useState(false)
    const [nombreEditar,setNombreEditar] = useState("")
    const [precioEditar,setPrecioEditar] = useState("")
    const [cantidadEditar,setCantidadEditar] = useState("")
    const [categoriaEditar,setCategoriaEditar] = useState("")

    useEffect(() => {
        async function traerproducts() {
            const datos = await getData("products")
            setProductos(datos)
        }
        traerproducts()
    }, [])

    async function eliminarProducto(id) {
        // Lógica para eliminar el producto con el ID proporcionado
        console.log(id);
        await deleteData("products", id)
    }

    async function actualizarProducto(id) {
        const objProducto = {
            nombre: nombreEditar,
            precio: precioEditar,
            cantidad: cantidadEditar,
            categoria: categoriaEditar
        }
        await patchData(objProducto,"products",id)
        
    }

    return (
        <>
            <h2>Lista de Productos</h2>
            {productos.map((producto) => {
                return (
                    <div>
                        <h3>{producto.nombre}</h3>
                        <h3>{producto.precio}</h3>
                        <h3>{producto.cantidad}</h3>
                        <h3>{producto.categoria}</h3>
                        <button onClick={() => {
                            eliminarProducto(producto.id)
                        }}>Eliminar</button>
                        <button onClick={()=>{
                            setMostrarEditar(!mostrarEditar)
                            setIdEditar(producto.id)
                            setNombreEditar(producto.nombre)
                            setPrecioEditar(producto.precio)
                            setCantidadEditar(producto.cantidad)
                            setCategoriaEditar(producto.categoria) 
                        }}>
                            Editar
                        </button>
                    </div>
                )
            })}

            {mostrarEditar && 
                <>
                    <input type="text" value={nombreEditar} onChange={(e)=>setNombreEditar(e.target.value)} />
                    <input type="text" value={precioEditar} onChange={(e)=>setPrecioEditar(e.target.value)} />
                    <input type="text" value={cantidadEditar} onChange={(e)=>setCantidadEditar(e.target.value)} />
                    <input type="text" value={categoriaEditar} onChange={(e)=>setCategoriaEditar(e.target.value)} />
                    <button
                        onClick={()=>{
                            actualizarProducto(idEditar)
                        }}
                    
                    >Confirmar</button>
                </>
            }
        </>
    )
}

export default ListaProductos