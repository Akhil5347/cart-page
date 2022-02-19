import React, { useContext } from "react";

import { CartContext } from "./Cart";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
         <img src="https://raw.githubusercontent.com/Akhil5347/Grocer-Ease/master/Assets/logog.svg" onclick= "" alt="logo" className="logo"/>
         
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
         
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;