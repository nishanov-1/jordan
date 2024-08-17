import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Buynow from "./components/ByNow";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
    </div>
  );
}

export default App;
