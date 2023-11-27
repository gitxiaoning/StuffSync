import './ShopListList.scss';
import Storage from '../Storage/Storage';
import itemData from "../../data/items2shop.json"

// Create the Header Component
const ShopListList = () => {

    let sortedList = Array.from(itemData);
    
    return (
        <div className="container">
            {sortedList.map((item) => (
                <Storage key={item.id} item={item} />
            ))}
        </div>
    );
};
  
export default ShopListList;