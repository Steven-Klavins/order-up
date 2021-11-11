import {useContext, useEffect, useState} from "react";
import styles from "./HeaderCardButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

function HeaderCardButton(props) {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer); 
    }

  }, [items, cartCtx.items.length]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className = {styles.badge}>
            {numberOfCartItems}
        </span>
    </button>
  );
}

export default HeaderCardButton;
