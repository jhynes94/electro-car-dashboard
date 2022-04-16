//https://serialport.io/docs/api-parsers-overview
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM4', baudRate: 921600 })

let BMS = {
    versionCAN: "",
    data: []
}

const parser = port.pipe(new ReadlineParser({ delimiter: '\r' }))
parser.on('data', (data) => {

    if(data[0] == 'V'){
        BMS.versionCAN = data;
    }
    else if(data[0] == 't') {
        const sample = {
            ID: '',
        }
        BMS.data.push(data);
    }
})

port.write('V\r')

port.write('S5\r')

port.write('O\r')

setTimeout(() => {
    port.write('C\r')
    parser.destroy();
    console.log(BMS.data)
    return 0
}, 1000);