import logo from './logo.svg';
import './App.css';

import Userdetails from './Components/Userdetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      <p>Simple react project</p>
      </header>
      <Userdetails/>
      
    </div>
  );
}

export default App;



