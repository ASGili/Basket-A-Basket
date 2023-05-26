import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./containers/ProductList";
import NavBar from "./components/NavBar";
import Basket from "./components/UserBasket";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";


function App() {
  const [productList, setProductList] = useState([])
  const [basket, setBasket] = useState([])


  useEffect(()=> getState(),[])
  
  const getState = () => {
    setProductList(list)
  }
 
  const handleAddToBasket = (event) => {
    const chosenItem = productList.find((item)=> event.target.value == item.id)
    const newBasket = [... basket, chosenItem]
    setBasket(newBasket)
  }
  return (
    <div>
    <h1>Welcome to Dial-A-Basket - Buy Now.</h1>
    <Router> 
    <NavBar/>  
      <Routes>
        <Route path="/*" element={<ErrorPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList handleAddToBasket={handleAddToBasket} productList={productList} />} />
        <Route path="/basket" element={<Basket basket={basket} />} />
      </Routes>      
    </Router>
    </div>
  );
};


const list = [
  {
    title: "Red Basket",
    price: 5,
    desc: "Red",
    id: 1
  },
  {
    title: "Blue Basket",
    price: 10,
    desc: "Blue",
    id: 2
  },
  {
    title: "Yellow Basket",
    price: 20,
    desc: "Yellow",
    id: 3
  },
  {
    title: "Mauve Basket",
    price: 50,
    desc: "Mauve",
    id: 4
  },
]

export default App;
