# Motor Controller
There are two Motor controllers (Node 1 and Node 2) connected via a IXXAT USB-to-CAN adapter. This server was written with Python as there was no known Javascript library to interface with the IXXAT device at the time of it's development.

Documentation for driver can be found here.
https://python-can.readthedocs.io/

## Register map for motors
| Item          | Address | Value |
| ------------- | ------- | ----- |
| RPM           | TBD     | 0-255 |
| Motor current | TBD     | 0-10  |

## Personal note on IXXAT and BorgWarner
I do not reccomend ever using this adapter. This German made adapter is very expensive and high performance, considered by many to be top of the line. With that, everything about the software for it sucks.

1. It's completely closed source. Even the drivers to interface with it are in .DLL format. This makes it quite difficult to use on Linux Devices.
2. The BorgWarner GUI was very poorly translated to English. The product manger should look for a career in a difference industry due to the laziness of the design.