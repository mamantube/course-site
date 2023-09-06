export default function ListNavigation({ items }) {
    // let renderedItems = [];
    // items.forEach((item) => {
    //     renderedItems.push(<li key={item.label}>{item.label}</li>)
    // })

    const renderedItems = items.map((item) => (
        <li key={item.label}>{item.label}</li>
    ))
    
    return <ul>{renderedItems}</ul>
}
