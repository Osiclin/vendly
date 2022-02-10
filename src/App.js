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
    },8000)
  }

  return (
    <div className="App">
      <Logo/>
      <div style={{width: '100%', border: '1px solid #82ECD3', borderRadius: '10px', backgroundColor: 'white', minHeight: state === 5 ? '484px' : '586px', marginTop: state === 5 && '5.5rem'}}>
        {
          state === 1 ? <Question1 load={load} /> :
          state === 2 ? <Loader/> :
          state === 3 ? <Complete setState={setState} /> :
          state === 4 ? <Pass state={state} setState={setState} /> :  
          state === 5 ? <Pass state={state} setState={setState} /> : '' 
        }
      </div>
    </div>
  );
}

export default App;
