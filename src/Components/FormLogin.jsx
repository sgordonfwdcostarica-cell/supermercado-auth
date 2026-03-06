import { getData } from "../services/fetch";
import "../styles/Login.css";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios,setUsuarios] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    async function traerUsuarios(){
      const datos = await getData("users")
      setUsuarios(datos)
    }
    traerUsuarios()
  },[])

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    const usuarioValido = usuarios.find((u)=>u.email === email && u.clave === password)

    if (usuarioValido) {
      alert("Login correcto");
      navigate("/admin");
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

  return(
    <>
      <form onSubmit={handleLogin}>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>

      </form>
    </>
  )
}

export default FormLogin