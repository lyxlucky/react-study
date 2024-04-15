import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import {incresment,decresment,addToNum} from './store/modules/counterStore'

function App() {

  const {count} = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.&nbsp;{count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>dispatch(incresment())}>&nbsp;+&nbsp;</button>
        <button onClick={()=>dispatch(addToNum(10))}>&nbsp;+&nbsp;10&nbsp;</button>
        <button onClick={()=>dispatch(decresment())}>&nbsp;-&nbsp;</button>
      </header>
    </div>
  );
}

export default App;
