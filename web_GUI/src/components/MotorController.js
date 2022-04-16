import Gauge from "./Gauge";
import ProgressBar from 'react-bootstrap/ProgressBar'

const MotorController = ({ Motor, data }) => {
  return (
    <div
      className="MotorController"
      style={{ float: Motor === 'Left' ? 'left' : 'right' }}
    >
      <h1>{Motor}</h1>
      <ProgressBar now={60} />
      <h2>RPM: {data.RPM}</h2>
      <h2>Speed: {data.speed}</h2>
      <h2>Temp: {data.temp}</h2>
      <h2>Current: {data.current}</h2>
      <Gauge Speed={data.speed}></Gauge>
      </div>
  );
};

export default MotorController;
