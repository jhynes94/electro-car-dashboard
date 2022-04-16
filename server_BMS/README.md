# Battery Management System (BMS)
This system is controlled with the ___ software interface for configuration and setup. When casually using, there is an express web server that polls the following registers and posts them to localhost:4000 in the JSON format for the react web app to read.

## Register map for motors
| Item          | Address | Value |
| ------------- | ------- | ----- |
| RPM           | TBD     | 0-255 |
| Motor current | TBD     | 0-10  |