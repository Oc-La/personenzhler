input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(aktuell)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    aktuell = 0
    basic.showIcon(IconNames.No, 2000)
    basic.clearScreen()
})
let aktuell = 0
aktuell = 0
let komplett = 3
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 10) {
        aktuell += 1
        basic.turnRgbLedOff()
        basic.pause(2000)
    }
    if (aktuell < komplett) {
        basic.setLedColor(0xff0000)
    }
    if (aktuell == komplett) {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
    }
    if (aktuell > komplett) {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
        basic.pause(200)
        basic.turnRgbLedOff()
        basic.pause(200)
        basic.setLedColor(0xff0000)
    }
})
