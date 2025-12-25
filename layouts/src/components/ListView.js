import ShopItem from "./ShopItem";

export default function ListView({ items }) {
    return (
        <div className="list-view">
            {items.map((item) => <ShopItem key={item.id} item={item} />)}
        </div>
    );
}