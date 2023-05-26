import BasketItem from "./BasketItem"

const Basket = ({basket, handleDelFromBasket}) => {

    const userBasket = basket.map((item, index) => {return <BasketItem handleDelFromBasket={handleDelFromBasket} index={index} item={item} />
    })

    const totalValue = basket.reduce((total, item)=>{return total + item.price},0)

    return(
        <div>
        <h5>The total value of your basket of baskets is ${totalValue}</h5>
        <ul>
        {userBasket}
        </ul>
        </div>
    )
}

export default Basket