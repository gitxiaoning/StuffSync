import './Header.scss';
import addIcon from "../../assets/icons/add.png";
import sortIcon from "../../assets/icons/sort.png";

// Create the Header Component
const Header = ({sortMethod, setSortMethod}) => {

    // A function that will change the sorting method
    function updateSortMethod(){
        if (sortMethod < 2){
            setSortMethod(sortMethod+1);
        } else {
            setSortMethod(0)
        }
    }

    // A function will handle when the sort icon is clicked
    function sortIconOnClick(event){
        event.preventDefault();
        updateSortMethod();
    }

    // A function will handle when the add icon is clicked
    function addIconOnClick(){
        // TBD
    }

    return (
        <header className='app-header'>
            <h1 className='app-header__title'>Pantry</h1>

            <div className='app-header__buttons'>
                <div className='app-header__button app-header__button--sort'><img src={sortIcon} onClick={sortIconOnClick} className='app-header__icon-sort'></img></div>
                <div className='app-header__button app-header__button--add'><img src={addIcon} className='app-header__icon-add'></img></div>
            </div>
        </header>
    );
};
  
export default Header;