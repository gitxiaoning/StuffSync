import './SortDropdown.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import sortIcon from "../../assets/icons/sort.png";

function SortDropdown() {
  return (
    <Dropdown className="sort-dropdown" autoClose={false}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown__image-wrapper">
        <img src={sortIcon} className='dropdown__icon'></img>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item href="#/action-1">Days Ascending</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Days Descending</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortDropdown;