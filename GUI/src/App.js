import { useState, useEffect } from 'react'
import './App.css';
import Axios from 'axios'
import MotorController from './components/MotorController';
import BMS from './components/BMS'

function App() {

  //Sets Default state to null
  const [battData, setBattData] = useState({
    batteryCurrent: null,
    batteryVoltage: null
  })

  //Sets Default state to null
  const [motorData, setMotorData] = useState({
    leftMotor: {
        RPM: null,
        speed: null,
        temp: null,
        current: null
    },
    rightMotor: {
        RPM: null,
        speed: null,
        temp: null,
        current: null
    }
  })

  const getMotorData = () => {
    Axios.get("http://localhost:4000/MotorData").then((response) => {
      setMotorData(response.data)
      //console.log(motorData)
    })
  }

  const getBattData = () => {
    Axios.get("http://localhost:4000/BMS-Data").then((response) => {
      setBattData(response.data)
      //console.log(battData)
    })
  }

  //Runs once at creation of component to set interval timers
  useEffect(() => {
    setInterval(getMotorData, 500);
    setInterval(getBattData, 2000);
  }, []);

  return (
    <div className="App">
      <MotorController Motor="Left" data={motorData.leftMotor} />
      <MotorController Motor="Right" data={motorData.rightMotor} />
      <hr></hr>
      <BMS Data={battData} />
    </div>
  );
}

export default App;
