import './NavBar.scss';
import home from "../../assets/icons/home.png";
import list from "../../assets/icons/list.png";
import inspire from "../../assets/icons/inspire.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    function handleHome(){
        navigate("/");
    }

    function handleInspire(){
        navigate("/inspire");
    }

    function handleList(){
        navigate("/list");
    }

    return (
        <nav className="nav-bar">
            <section className='nav-bar__icon-wrapper' onClick={handleHome}>
                <img src={home} className='nav-bar__icon-home'></img>
                <span className='nav-bar__icon-text'>Home</span>
            </section>

            <section className='nav-bar__icon-wrapper' onClick={handleList}>
                <img src={list} className='nav-bar__icon-list'></img>
                <span className='nav-bar__icon-text'>Shop List</span>
            </section>

            <section className='nav-bar__icon-wrapper' onClick={handleInspire}>
                <img src={inspire} className='nav-bar__icon-inspire'></img>
                <span className='nav-bar__icon-text'>Inspire</span>
            </section>
        </nav>
    );
};
  
export default NavBar;