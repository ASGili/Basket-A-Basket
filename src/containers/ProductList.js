import styled from "styled-components"
import ListItem from "../components/ListItem"


const ProductList = ({productList}) => {

    const listOfProducts = productList.map((item)=><ListItem item={item}>{item.title}</ListItem>)

    return(
        <ul>
            {listOfProducts}
        </ul>
    )
}

export default ProductList