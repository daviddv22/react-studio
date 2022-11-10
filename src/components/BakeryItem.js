// TODO: create a component that displays a single bakery item
export default function BakeryItem({item}){
    return (
        <div>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <h3>{item.price}</h3>
    <img
        src={item.image}
        style={{
        width: 100,
        height: 100
        }}
    />
</div>
    )
}
