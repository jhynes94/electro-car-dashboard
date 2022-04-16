import RadialGauge from "react-canvas-gauges/dist/RadialGauge";

const Gauge = ({ Speed }) => {
    return (
        <div className="Gauge">
            <RadialGauge
            units='mph'
            title='Speed'
            value={Speed}
            minValue={0}
            maxValue={50}
            majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
            minorTicks={2}
            ></RadialGauge>
        </div>
    );
};

export default Gauge;
