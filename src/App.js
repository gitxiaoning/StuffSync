import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main"
import Inspire from "./Components/Inspire/Inspire"
import ShoppingList from "./Components/ShoppingList/ShoppingList"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/inspire" element={<Inspire/>}></Route>
          <Route path="/list" element={<ShoppingList/>}></Route>
        </Routes>
      
      </BrowserRouter>

    </>
    
    
  );
}

export default App;
