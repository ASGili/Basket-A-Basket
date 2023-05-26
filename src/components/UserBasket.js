import BasketItem from "./BasketItem"

const Basket = ({basket, handleDelFromBasket}) => {

    const userBasket = basket.map((item, index) => {return <BasketItem handleDelFromBasket={handleDelFromBasket} index={index} item={item} />

    })

    return(
        <ul>
        {userBasket}
        </ul>
    )
}

export default Basket