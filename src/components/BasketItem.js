const BasketItem = ({item, handleDelFromBasket, index}) => {

    return(
        <li>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        <button value={index} onClick={handleDelFromBasket}>Delete From Basket</button>
        </li>
    )
}

export default BasketItem