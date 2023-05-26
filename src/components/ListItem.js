const ListItem = ({item, handleAddToBasket}) => {

    return(
        <li>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        <button value={item.id} onClick={handleAddToBasket}>Add To Basket</button>
        </li>
    )
}

export default ListItem