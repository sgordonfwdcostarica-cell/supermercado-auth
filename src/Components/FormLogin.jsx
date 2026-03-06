import { getData } from "../services/fetch";
import "../styles/Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("cliente");
  const [usuarios, setUsuarios] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function traerUsuarios() {
      const datos = await getData("users")
      setUsuarios(datos)
    }
    traerUsuarios()
  }, [])

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    const usuarioValido = usuarios.find((u) => u.email === email && u.clave === password)

    if (usuarioValido) {
      alert("Login correcto");
      navigate("/admin");
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

  return (
    <div className="login-container">
      <form>

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

        <button onClick={handleLogin}  type="button" className="submit-btn">Login</button>

      </form>
    </div>
  )
}

export default FormLogin