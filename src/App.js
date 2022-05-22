import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber );
  const dispatch = useDispatch();
  return (
    <>
    <h1>Increment Decrement counter using react redux</h1>
    <p>{myState}</p>
    <button onClick={ () => dispatch(incNumber())}>increment</button>
    <button onClick={ () => dispatch(decNumber())}>decrement</button>
    </>
  );
}

export default App;
