import AddToCartButton from "./AddToCartButton";

export default function ShopCard({ card }) {
    return (
        <div className="shop-card">
            <div className="header">
                <span className="title">{card.name}</span>
                <span>{card.color}</span>
            </div>
            <img
                src={card.img}
                width={300}
                height={150}
            />
            <div className="order">
                <span>${card.price}</span>
                <AddToCartButton />
            </div>
        </div>
    );
}