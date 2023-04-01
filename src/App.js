import "./App.css";
import ItemList from "./components/Itemlist/ItemList";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  let bienvenida = "Bienvenidos a mi Pagina";
  return (
    <div className="App">
      <Navbar />
      <ItemList bienvenida={bienvenida} />
    </div>
  );
}

export default App;
