import InspireHeader from "../InspireHeader/InspireHeader";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import TinyInventoryList from "../TinyInventoryList/TinyInventoryList";
import InspireVideoList from "../InspireVideoList/InspireVideoList"

const Inspire = () => {

    const [selectedIngredient, setSelectedIngredient] = useState([])

    return (
        <>
            <InspireHeader />
            <TinyInventoryList selectedIngredient={selectedIngredient} setSelectedIngredient={setSelectedIngredient}/>
            <InspireVideoList selectedIngredient={selectedIngredient}/>
            <NavBar />
        </>
    )
}

export default Inspire;