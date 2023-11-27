import './TinyInventoryCell.scss';

// Create the Header Component
const TinyInventoryCell = ({text,selectedIngredient,setSelectedIngredient}) => {

    function handleSelectIngredient() {
        if (!selectedIngredient.includes(text.slice(3))){
            setSelectedIngredient([...selectedIngredient, text.slice(3)])
        } else {
            const filteredList = selectedIngredient.filter(item => item !== text.slice(3))
            setSelectedIngredient(filteredList);
        }
        
    }
    return (
        <span className={selectedIngredient.includes(text.slice(3)) ? 'cell-clicked' : ''  + ` tiny-cell`} onClick={handleSelectIngredient} >{text}</span>
    );
};
  
export default TinyInventoryCell;