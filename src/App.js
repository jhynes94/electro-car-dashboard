import logo from './logo.svg';
import './App.css';
import MotorController from './MotorController';
import Axios from 'axios'

function App() {

  const getData = () => {
    Axios.get("http://localhost:4000/MotorData").then((response) => {
      console.log(response.data.leftMotor.RPM)
    })
  }

  return (
    <div className="App">
      <MotorController Motor="Left" />
      <MotorController Motor="Right" />
      <hr></hr>
      <div>
        <h1>Battery Management System (BMS)</h1>
        <h2>Battery Current</h2>
        <h2>Battery Voltage</h2>
      </div>
      <button onClick={getData}>hello</button>
    </div>
  );
}

export default App;
