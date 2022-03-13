input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
servos.P2.setAngle(90)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        for (let index = 0; index < 50; index++) {
            motorbit.forward(40)
        }
        for (let index = 0; index < 50; index++) {
            motorbit.back(40)
        }
    } else {
        motorbit.brake()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        for (let index = 0; index < 50; index++) {
            motorbit.forward(40)
        }
        for (let index = 0; index < 50; index++) {
            motorbit.back(40)
        }
    } else {
        motorbit.brake()
    }
    while (pins.digitalReadPin(DigitalPin.P2) == 1) {
        servos.P2.setAngle(180)
        basic.pause(1000)
        servos.P2.setAngle(90)
        basic.pause(1000)
    }
})
