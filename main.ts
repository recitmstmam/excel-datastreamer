radio.onReceivedValue(function (name, value) {
    dataStreamer.writeNumberArray([value])
    dataStreamer.writeLine()
})
dataStreamer.setBaudRate(BaudRate.BaudRate9600)
radio.setGroup(1)
