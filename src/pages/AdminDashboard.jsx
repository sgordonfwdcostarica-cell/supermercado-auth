
import FormProductos from "../Components/Formproductos";
import ListaProductos from "../Components/ListaProductos";
import "../styles/home.css";  // shared layout from Home
import "../styles/Dashboard.css"; // overrides and admin-specific tweaks
import { useEffect, useState } from "react";

function AdminDashboard() {

  const [products, setProducts] = useState([]);

  return (
    <div className="home-wrapper Dashboard">
      <h1>Admin Dashboard</h1>

      <FormProductos/>

      <ListaProductos/>
    </div>
  );
}

export default AdminDashboard;