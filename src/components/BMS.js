const BMS = ({ Data }) => {
    return (
        <div className="BMS">
            <div>
                <h1>Battery Management System (BMS)</h1>
                <h2>Battery Current {Data.batteryCurrent}</h2>
                <h2>Battery Voltage {Data.batteryVoltage}</h2>
            </div>
        </div>
    );
};

export default BMS;