import './TinyInventoryList.scss';
import itemData from "../../data/items.json"
import TinyInventoryCell from '../TinyInventoryCell/TinyInventoryCell';

// Create the Header Component
const TinyInventoryList = ({selectedIngredient, setSelectedIngredient}) => {

    let itemList = itemData.map((item) => {
        return `${item.icon} ${item.name}`
    })    

    return (
        <div className="container">
            {itemList.map((item) => (
                <TinyInventoryCell text={item} selectedIngredient={selectedIngredient} setSelectedIngredient={setSelectedIngredient}/>
            ))}
        </div>
    );
};
  
export default TinyInventoryList;