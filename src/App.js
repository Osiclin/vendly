import { useState } from 'react';
import './App.css';
import Complete from './components/Complete/Complete';
import Loader from './components/Loader/Loader';
import Logo from './components/Logo/Logo';
import Pass from './components/Pass/Pass';
import Question1 from './components/Questions/Question1';

function App() {
  const [state, setState] = useState(1)

  const load = () => {
    setState(2)
    setTimeout(() => {
      setState(3)
    },3000)
  }

  return (
    <div className="App">
      <Logo/>
      <div style={{width: '100%', border: '1px solid #82ECD3', borderRadius: '10px', backgroundColor: 'white', height: '586px'}}>
        {
          state === 1 ? <Question1 load={load} /> :
          state === 2 ? <Loader/> :
          state === 3 ? <Complete setState={setState} /> :
          <Pass/>
        }
      </div>
    </div>
  );
}

export default App;
