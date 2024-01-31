import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import  { counterActions } from '../store/counter'

const Counter = () => {

 const counter = useSelector(state => state.counter);
 const dispatch = useDispatch();

 const incrementHandler = () => {
  dispatch(counterActions.increment())
 }
 
 const decrementHandler = () => {
  dispatch(counterActions.decrement())
 }

 const increase = () => {
  dispatch(counterActions.increase(10)) //{type: 'INCREASE', payload:}
 }

const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
