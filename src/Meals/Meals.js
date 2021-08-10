import { Fragment } from "react";
import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
