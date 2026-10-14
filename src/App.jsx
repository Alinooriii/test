import { Route, Routes } from "react-router-dom";
import ProductPage from "./product-page";
import ProductDetails from "./product-detail";
import Card from "./card";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
