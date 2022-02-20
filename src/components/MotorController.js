  
  const MotorController = ({ Motor, data }) => {
    return (
      <div
        className="MototrController"
        style={{ float: Motor === 'Left' ? 'left' : 'right' }}
      >
        <h1>{Motor}</h1>
        <h2>RPM: {data.RPM}</h2>
        <h2>Speed: {data.speed}</h2>
        <h2>Temp: {data.temp}</h2>
        <h2>Current: {data.current}</h2>
      </div>
    );
  };
  
  export default MotorController;
  