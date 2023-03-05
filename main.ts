input.onButtonPressed(Button.A, function () {
    images.createImage(`
        . . # . .
        . # . . .
        # # # # #
        . # . . #
        . . # . #
        `).showImage(0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(250)
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        . . # . .
        . . . # .
        # # # # #
        # . . # .
        # . # . .
        `).showImage(0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(250)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    images.createImage(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `).showImage(0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(250)
})
music.playTone(262, music.beat(BeatFraction.Double))
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.B))) {
        if (!(input.logoIsPressed())) {
            if (!(input.buttonIsPressed(Button.A))) {
                images.createImage(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . . . . .
                    `).showImage(0)
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
                control.waitMicros(250)
            }
        }
    }
})
