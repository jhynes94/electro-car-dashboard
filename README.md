# Porsche 914 - EV Controller
This is a 1976 Porsche that has an EV conversion.

## System Architecture for CAN and web Control

```mermaid
graph TD;
    Motor_1-->IXXAT(USB-to-CAN);
    Motor_2-->IXXAT(USB-to-CAN);
    IXXAT(USB-to-CAN)-->server_motor
    BMS-->CANDAPTER;
    CANDAPTER-->server_BMS


    subgraph Computer
    server_BMS-->WebBrowser
    server_motor-->WebBrowser
    web_GUI-->WebBrowser
    end
```

Created with [Mermaid](https://mermaid-js.github.io/mermaid/#/./flowchart?id=flowcharts-basic-syntax) Markdown.