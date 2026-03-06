import { useState } from "react";
import '../styles/Register.css'

import { postData } from "../services/fetch";

function FormRegistro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("cliente");

    async function usuariosRegistro() {
        const usuario = {
            nombre: name,
            email: email,
            clave: password,
            rol: role
        }
        await postData(usuario,"users")
    }

    return (
        <div className="register-container">
            <form className="formRegistro">
                
                <div className="inputs-frame">
                  <input
                  className="inputRegistro"
                      placeholder="Nombre"
                      onChange={(e) => setName(e.target.value)}
                  />

                  <input
                  className="inputRegistro"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                  className="inputRegistro"
                      type="password"
                      placeholder="Contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                  />

                  <select onChange={(e) => setRole(e.target.value)} className="selectRegistro">
                      <option value="cliente">Cliente</option>
                      <option value="admin">Admin</option>
                  </select>
                </div>

                <button type="button" className="btnRegistro" onClick={usuariosRegistro}>Registrar</button>

            </form>
        </div>
    )
}
export default FormRegistro