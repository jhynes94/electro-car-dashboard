var express = require('express');
const cors = require("cors");
var app = express();
const port = 4000

app.use(cors());


app.route('/').get(function (req, res) {
    res.send("Use other calls to see endpoints");
});

app.get('/MotorData', function (req, res) {
    res.send(
        {
            leftMotor: {
                RPM: Math.floor(Math.random() * (100 - 0) + 0),
                speed: Math.floor(Math.random() * (100 - 0) + 0),
                temp: Math.floor(Math.random() * (100 - 0) + 0),
                current: Math.floor(Math.random() * (100 - 0) + 0),
            },
            rightMotor: {
                RPM: Math.floor(Math.random() * (100 - 0) + 0),
                speed: Math.floor(Math.random() * (100 - 0) + 0),
                temp: Math.floor(Math.random() * (100 - 0) + 0),
                current: Math.floor(Math.random() * (100 - 0) + 0),
            }
        }
    );
});

app.get('/BMS-Data', function (req, res) {
    res.send({
        batteryCurrent: Math.floor(Math.random() * (100 - 0) + 0),
        batteryVoltage: Math.floor(Math.random() * (100 - 0) + 0)
    });
});

app.listen(port, () => {
    console.log(`API running on port: ${port}`)
})