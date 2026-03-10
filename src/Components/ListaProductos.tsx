
import { useEffect, useState } from "react"
import { getData, deleteData, patchData } from "../services/fetch"
import '../styles/ListaProductos.css'

interface Producto {
    id: string;
    nombre: string;
    precio: number;
    cantidad: number;
    categoria: string;
    img?: string;
}

function ListaProductos({ isAdmin = true }) {

    const [productos, setProductos] = useState<Producto[]>([])

    const [idEditar,setIdEditar] = useState<string>("")
    const [mostrarEditar,setMostrarEditar] = useState(false)
    const [nombreEditar,setNombreEditar] = useState<string>("")
    const [precioEditar,setPrecioEditar] = useState<number>(0)
    const [cantidadEditar,setCantidadEditar] = useState<number>(0)
    const [categoriaEditar,setCategoriaEditar] = useState<string>("")
    const [imagenEditar,setImagenEditar] = useState<string>("")

    useEffect(() => {
        async function traerproducts() {
            const datos = await getData("products")
            setProductos(datos)
        }
        traerproducts()
    }, [productos])

    async function eliminarProducto(id: string) { 
        // Lógica para eliminar el producto con el ID proporcionado
        console.log(id);
        await deleteData("products", id)
    }

    async function actualizarProducto(id: string) {
        const objProducto = {
            nombre: nombreEditar,
            precio: precioEditar,
            cantidad: cantidadEditar,
            categoria: categoriaEditar,
            img: imagenEditar
        }
        await patchData(objProducto,"products",id)
        
    }

    return (
        <div className="container" style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                {isAdmin ? "Lista de Productos (Admin)" : "Nuestros Productos"}
            </h2>
            <div className="lista-productos-container">
            {productos.map((producto) => {
                return (
                    <div key={producto.id} className="productoCard">
                        {producto.img ? (
                            <div className="card-image-container">
                                <img src={producto.img} alt={producto.nombre} className="card-image" />
                                <span className="oferta-badge">OFERTA</span>
                            </div>
                        ) : (
                            <div className="card-image-placeholder">
                                <span className="oferta-badge">OFERTA</span>
                            </div>
                        )}
                        
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
                            {isAdmin ? (
                                <>
                                    <button className="btnEditar" onClick={()=>{
                                        setMostrarEditar(!mostrarEditar)
                                        setIdEditar(producto.id)
                                        setNombreEditar(producto.nombre)
                                        setPrecioEditar(producto.precio)
                                        setCantidadEditar(producto.cantidad)
                                        setCategoriaEditar(producto.categoria)
                                        setImagenEditar(producto.img || "")
                                    }}>
                                        🛒 Editar
                                    </button>
                                    <button className="btnEliminar" onClick={() => {
                                        eliminarProducto(producto.id)
                                    }}>🗑️</button>
                                </>
                            ) : (
                                <button className="btnAgregar">
                                    <span>➕</span> Agregar
                                </button>
                            )}
                        </div>
                    </div>
                )
            })}
            </div>

            {mostrarEditar && 
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Editar Producto</h3>
                        <input type="text" placeholder="Nombre" value={nombreEditar} onChange={(e)=>setNombreEditar(e.target.value)} />
                        <input type="number" placeholder="Precio" value={precioEditar} onChange={(e)=>setPrecioEditar(Number(e.target.value))} />
                        <input type="number" placeholder="Cantidad" value={cantidadEditar} onChange={(e)=>setCantidadEditar(Number(e.target.value))} />
                        <input type="text" placeholder="Categoría" value={categoriaEditar} onChange={(e)=>setCategoriaEditar(e.target.value)} />
                        <input type="text" placeholder="URL de la Imagen" value={imagenEditar} onChange={(e)=>setImagenEditar(e.target.value)} />
                        <div className="modal-actions">
                            <button
                                className="btnConfirmar"
                                onClick={()=>{
                                    actualizarProducto(idEditar)
                                    setMostrarEditar(false)
                                }}
                            >Confirmar</button>
                            <button
                                className="btnCancelar"
                                onClick={() => setMostrarEditar(false)}
                            >Cancelar</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListaProductos