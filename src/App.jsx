import { useState } from 'react';
import './App.css';
import Practice from './Pages/Practice/Practice';
import Landing from './Pages/Landing/Landing';
import { Switch } from '@mui/material';

function App() {

  const [showPractice, setShowPractice] = useState(false);

  function handleChoice() {
    setShowPractice((prevShowPractice) => !prevShowPractice);
  }

  return (
    <>
      <div>
        <Switch checked={showPractice} inputProps={{ 'aria-label': 'Practice' }} onChange={handleChoice}/> Practice
      </div>
      { showPractice ? <Practice/> : <Landing/>}
    </>
  )
}

export default App
