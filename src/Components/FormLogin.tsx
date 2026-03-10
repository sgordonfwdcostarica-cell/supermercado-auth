import React from "react";
import { getData } from "../services/fetch";
import "../styles/Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("cliente");
  const [usuarios, setUsuarios] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function traerUsuarios() {
      const datos = await getData("users")
      setUsuarios(datos)
    }
    traerUsuarios()
  }, [])

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    const usuarioValido = usuarios.find((u) => u.email === email && u.clave === password)

    if (usuarioValido) {
      if (usuarioValido.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>

        <div className="inputs-frame">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Login</button>

      </form>
    </div>
  )
}

export default FormLogin