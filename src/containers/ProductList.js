import styled from "styled-components"
import ListItem from "../components/ListItem"


const ProductList = ({productList, handleAddToBasket}) => {

    const listOfProducts = productList.map((item)=><ListItem key={item.id} handleAddToBasket={handleAddToBasket} item={item}>{item.title}</ListItem>)

    return(
        <ul>
            {listOfProducts}
        </ul>
    )
}

export default ProductList