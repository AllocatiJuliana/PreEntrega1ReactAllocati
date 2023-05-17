import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Itemlist/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { CartContainer } from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
