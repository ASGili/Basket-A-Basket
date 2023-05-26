const ListItem = ({item}) => {

    return(
        <li>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        </li>
    )
}

export default ListItem