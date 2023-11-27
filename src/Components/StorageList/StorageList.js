import './StorageList.scss';
import Storage from '../Storage/Storage';
import itemData from "../../data/items.json"
import {sortBy} from "../../util/formatter"

// Create the Header Component
const StorageList = ({sortMethod}) => {

    let sortedList = Array.from(itemData);

   
    if (sortMethod === 0){
        sortedList = Array.from(itemData);
    } else if (sortMethod === 1) {
        sortedList = sortBy(sortedList, "timestamp_added", true);
    } else if (sortMethod === 2){
        sortedList = sortBy(sortedList, "timestamp_added", false);
    }
    

    return (
        <div className="container">
            {sortedList.map((item) => (
                <Storage key={item.id} item={item} />
            ))}
        </div>
    );
};
  
export default StorageList;