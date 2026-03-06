import { postData } from "../services/fetch";
import { useState } from "react";
import '../styles/FormProductos.css'

function FormProductos() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  async function productosRegistro() {
    const producto = {
      nombre: name,
      precio: price,
      cantidad: quantity,
      categoria: category
    };

    await postData(producto, "products");
  }

  return (
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

      <select
        className="selectRegistro"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Seleccionar categoría</option>
        <option value="frutas">Frutas</option>
        <option value="verduras">Verduras</option>
        <option value="lácteos">Lácteos</option>
      </select>

      <button className="btnRegistro" onClick={productosRegistro}>
        Guardar Producto
      </button>
    </div>
  );
}

export default FormProductos;
