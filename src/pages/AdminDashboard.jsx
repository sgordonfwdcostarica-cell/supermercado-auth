
import FormProductos from "../Components/Formproductos";
import ListaProductos from "../Components/ListaProductos";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";

function AdminDashboard() {

  const [products, setProducts] = useState([]);

  return (
    <div className="Dashboard">
      <h1>Admin Dashboard</h1>

      <FormProductos/>


      <ListaProductos/>
    </div>
  );
}

export default AdminDashboard;