# import the library
import can

# create a bus instance
# many other interfaces are supported as well (see documentation)
bus = can.Bus(interface='ixxat',
              channel=0, # The specific device used by Jarrods Junk is HW440586
              bitrate=1000000,
              receive_own_messages=True)

# send a message
"""
message = can.Message(arbitration_id=123, is_extended_id=True,
                      data=[0x11, 0x22, 0x33])
bus.send(message, timeout=0.2)
"""

# iterate over received messages
for msg in bus:
    if (msg.arbitration_id == 385):
        print(f"{msg.arbitration_id:X}: {msg.data}")
    #print(f"{msg.arbitration_id:X}: {msg.data}")

"""file1 = open("myfile.txt", "w")
L = ["This is Delhi \n", "This is Paris \n", "This is London"]
file1.writelines(L)
file1.close()"""

# or use an asynchronous notifier
#notifier = can.Notifier(bus, [can.Logger("recorded.log"), can.Printer()])