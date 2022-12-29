import "./styles.css";
import { createStore } from "redux";

function reducer(state = "hello", action) {
  return state;
}
let store = createStore(reducer);
console.log(store.getState());

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>Redux to learn easy</p>
      {store.getState()}
    </div>
  );
}