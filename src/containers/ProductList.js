import ListItem from "../components/ListItem"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProductList = ({productList}) => {

    const listOfProducts = productList.map((item)=><li>{item.title}</li>)

    return(
        <ul>
            {listOfProducts}
        </ul>
    )
}

export default ProductList