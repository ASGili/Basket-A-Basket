import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./containers/ProductList";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";


function App() {
  const [productList, setProductList] = useState([])
  const [basket, setBasket] = useState([])


  useEffect(()=> getState(),[])
  
  const getState = () => {
    setProductList(list)
  }

  return (
    <body>
    <h1>Welcome to the Shop - Buy Something Now.</h1>
    {/* <NavBar/> */}
    <Router>   
      <Routes>
        <Route path="/*" element={<ErrorPage/>} />
        <Route path="/" element={<ProductList productList={productList} />} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/basket" element={<ProductList/>} />
      </Routes>      
    </Router>

    </body>
  );
}


const list = [
  {
    title: "Red",
    price: 20,
    desc: "",
    id: 1
  },
  {
    title: "Blue",
    price: 20,
    desc: "",
    id: 2
  },
  {
    title: "Yellow",
    price: 20,
    desc: "",
    id: 3
  },
  {
    title: "Mauve",
    price: 20,
    desc: "",
    id: 4
  },
]

export default App;
