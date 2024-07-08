import './App.css';
import NavBar from './components/NavBar';
import dataSet from "./data";

function App() {
  return (
    <div className="App">
      <NavBar />
      {dataSet}
    </div>
  );
}

export default App;
