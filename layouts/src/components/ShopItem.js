import AddToCartButton from "./AddToCartButton";

export default function ShopItem({ item }) {
    return (
        <div className="shop-item">
            <img
                src={item.img}
                width={200}
                height={85}
            />
            <span className="title">{item.name}</span>
            <span>{item.color}</span>
            <span className="price">${item.price}</span>
            <AddToCartButton />
        </div>
    );
}