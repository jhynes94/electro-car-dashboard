# Porsche 914 - EV Controller
This is a 1976 Porsche that has an EV conversion. The system is quite unique with a convertible top, pickup tuck bed, fully custom rocker suspension, and a chain drive.

## System Architecture (CAN)

```mermaid
graph TD;
    Motor_1-->IXXAT_USB-to-CAN;
    Motor_2-->IXXAT_USB-to-CAN;
    IXXAT_USB-to-CAN-->server_motor
    BMS-->CANDAPTER;
    CANDAPTER-->server_BMS

    subgraph Windows Computer
    server_BMS--localhost:4000-->WebBrowser
    server_motor--localhost:5000-->WebBrowser
    web_GUI--localhost:3000-->WebBrowser
    end

```

## Why are there three servers?
The BMS was written first using Javascript and Express JS. The IXXAT CAN adapter only works with python, so a seperate one was made. It was not sure if the react web app will sit on the device so, it was also seperated.

Created with [Mermaid](https://mermaid-js.github.io/mermaid/#/./flowchart?id=flowcharts-basic-syntax) Markdown.