import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, isToggle } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(isToggle);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!isToggle ? <div className={classes.value}>{counter}</div> : ""}
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        Toggle Counter
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button>
    </main>
  );
};

export default Counter;
