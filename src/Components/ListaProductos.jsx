
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
        <div className="container" style={{ padding: '2rem' }}>
            <h2>Lista de Productos</h2>
            <div className="lista-productos-container">
            {productos.map((producto) => {
                return (
                    <div key={producto.id} className="productoCard">
                        {/* Fake image area matching "Ofertas" */}
                        <div className="card-image-placeholder">
                            <span className="oferta-badge">OFERTA</span>
                        </div>
                        <div className="productoInfo">
                            <h3>{producto.nombre}</h3>
                            <p className="subtext">{producto.cantidad} uds. aprox.</p>
                            <div className="price-row">
                                <span className="price-main">${producto.precio}.00</span>
                                {/* Fake old price for effect */}
                                <span className="price-old">${(Number(producto.precio) * 1.2).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="productoActions">
                            <button className="btnEditar" onClick={()=>{
                                setMostrarEditar(!mostrarEditar)
                                setIdEditar(producto.id)
                                setNombreEditar(producto.nombre)
                                setPrecioEditar(producto.precio)
                                setCantidadEditar(producto.cantidad)
                                setCategoriaEditar(producto.categoria) 
                            }}>
                                🛒 Editar
                            </button>
                            <button className="btnEliminar" onClick={() => {
                                eliminarProducto(producto.id)
                            }}>🗑️</button>
                        </div>
                    </div>
                )
            })}
            </div>

            {mostrarEditar && 
                <div className="editarForm">
                    <h3>Editar Producto</h3>
                    <input type="text" placeholder="Nombre" value={nombreEditar} onChange={(e)=>setNombreEditar(e.target.value)} />
                    <input type="number" placeholder="Precio" value={precioEditar} onChange={(e)=>setPrecioEditar(e.target.value)} />
                    <input type="number" placeholder="Cantidad" value={cantidadEditar} onChange={(e)=>setCantidadEditar(e.target.value)} />
                    <input type="text" placeholder="Categoría" value={categoriaEditar} onChange={(e)=>setCategoriaEditar(e.target.value)} />
                    <button
                        className="btnConfirmar"
                        onClick={()=>{
                            actualizarProducto(idEditar)
                        }}
                    >Confirmar</button>
                </div>
            }
        </div>
    )
}

export default ListaProductos