
import Header from "../Header/Header";
import StorageList from '../StorageList/StorageList';
import NavBar from '../NavBar/NavBar';
import SortDropDown from '../SortDropdown/SortDropdown'
import { useState } from "react";

const Main = () => {

    const [sortMethod, setSortMethod] = useState(0)

    return (
        <>
            <Header sortMethod={sortMethod} setSortMethod={setSortMethod}/>
            <StorageList sortMethod={sortMethod}/>
            <NavBar/>
        </>
    )
}

export default Main;