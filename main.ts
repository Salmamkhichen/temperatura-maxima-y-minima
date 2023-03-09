input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
})
let min = 0
let max = 0
let current_trmperature = input.temperature()
max = current_trmperature
min = current_trmperature
basic.forever(function () {
    basic.showString(".")
    current_trmperature = input.temperature()
    if (input.temperature() < min) {
        min = current_trmperature
    }
    if (current_trmperature < max) {
        max = current_trmperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
