import './App.css';
import { decrement, increment, removeAllProduct } from "./redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';

function App() {
const state = useSelector((state) => state.changeTheNumber)
console.log(state);
const dispatch = useDispatch()
const product = {
  "id": 1,
  "name" : "hello"
};
  return (
    <div className="App">
      <header className="App-header">
        <div className="inputs">

          <button className="button" onClick={() => dispatch(decrement(product.id))}> -  </button>
          <span className="number">{state.length}</span>
          <button className="button" onClick={() => dispatch(increment(product.id))}> + </button>
          <button className="button-remove-get" onClick={() => dispatch(removeAllProduct())}> Remove </button>
        </div>

      </header>
    </div>
  );
}

export default App;
