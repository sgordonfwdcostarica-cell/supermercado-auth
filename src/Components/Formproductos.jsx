import { postData } from "../services/fetch";
import { useState } from "react";
import '../styles/FormProductos.css'

function FormProductos() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");

  async function productosRegistro() {
    const producto = {
      nombre: name,
      precio: price,
      cantidad: quantity,
      categoria: category,
      img: img || "https://via.placeholder.com/150"
    };

    await postData(producto, "products");
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="formproductos">
        <h2>Registro de Productos</h2>

        <input
          type="text"
          placeholder="Nombre del producto"
          className="inputRegistro"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          className="inputRegistro"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          className="inputRegistro"
          onChange={(e) => setQuantity(e.target.value)}
        />

      <input 
          type="text"
          placeholder="URL de la imagen"
          className="inputRegistro"
          onChange={(e) => setImg(e.target.value)}
      />


        <select
          className="selectRegistro"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Seleccionar categoría</option>
          <option value="frutas">Frutas</option>
          <option value="verduras">Verduras</option>
          <option value="lácteos">Lácteos</option>
        </select>

        <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
          <button
            onClick={productosRegistro}
            className="submit-btn"
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Registrar Producto
          </button>
        </div>
      </div>
    </div>
  );

}

export default FormProductos;
