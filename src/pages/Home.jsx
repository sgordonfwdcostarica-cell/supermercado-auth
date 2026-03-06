
import Navbar from "../Components/navbar";
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <h1 className="titulo">Bienvenido al Supermercado</h1>
      <p>Los mejores productos al mejor precio.</p>
    </div>
  );
}

export default Home;