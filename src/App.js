import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement} from './actions';


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector (state => state.isLog);
  const dispatch = useDispatch ();
  return (
    <div className="App">
      <h1>Counter {counter} </h1>,
      <button className='btn btn-primary btn-sm' onClick={()=> dispatch(increment(5))}>+</button>
      <button className='btn btn-primary btn-sm' onClick={()=> dispatch(decrement())}>-</button>

      {isLogged ? <h3>valuable information i should not see</h3> : 'not logged in'};
    </div>
  );
}

export default App;
