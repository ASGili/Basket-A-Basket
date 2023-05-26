import styled from "styled-components"

const ListItem = ({item, handleAddToBasket}) => {

    return(
        <GridItem>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        <button value={item.id} onClick={handleAddToBasket}>Add To Basket</button>
        </GridItem>
    )
}

const GridItem = styled.li`

`

export default ListItem