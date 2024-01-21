import logo from './logo.svg';
import './App.css';
import LBCCard from './Components/Card/Card';
import LBCLabel from './Components/Label/Label';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LBCCard sx={{backgroundColor: "#80bfff", color: "#fff"}}>
          <LBCLabel variant={"h3"}>
            This is Label Component.
          </LBCLabel>
        </LBCCard>
      </header>
    </div>
  );
}

export default App;
