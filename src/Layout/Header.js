import {Fragment} from "react";
import styles from "./Header.module.css"
import mealsImage from "../assets/meals.jpg"
import HeaderCardButton from "../UI/HeaderCardButton";

function Header (props) {
    return (
      <Fragment>
      <header className={styles.header}>
          <h1>Order Up</h1>
          <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt="Table of food"/>
      </div>
      </Fragment>

    );
  }
  
  export default Header;
  