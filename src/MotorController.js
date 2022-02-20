  
  const MotorController = ({ Motor }) => {
    return (
      <div
        className="MototrController"
        style={{ float: Motor === 'Left' ? 'left' : 'right' }}
      >
        <h1>{Motor}</h1>
        <h2>RPM: 115200</h2>
        <h2>Speed: 10 mph</h2>
        <h2>Temp: 45C</h2>
      </div>
    );
  };
  
  export default MotorController;
  