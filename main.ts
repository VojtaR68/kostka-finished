let y = 0
let x = 0
let číslo = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(128)
    y = 0
    x = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 4; index++) {
            led.plot(x, y)
            y += 1
            led.plot(x, y)
        }
        y = 0
        basic.pause(128)
        x += 1
    }
    číslo = randint(1, 6)
    if (číslo == 1) {
        y = 0
        x = 0
        for (let index = 0; index < 5; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        x = 1
        y = 0
        led.unplot(x, y)
        y += 2
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        x = 3
        y = 0
        for (let index = 0; index < 4; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        x = 4
        y = 0
        for (let index = 0; index < 5; index++) {
            led.unplot(x, y)
            y += 1
        }
    } else if (číslo == 2) {
        x = 0
        y = 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        y = 1
        x = 1
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 2; index++) {
                led.unplot(x, y)
                y += 2
            }
            basic.pause(128)
            y = 1
            x = 2
        }
        y = 0
        x = 3
        led.unplot(x, y)
        y += 2
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        x = 4
        y = 0
        for (let index = 0; index < 5; index++) {
            led.unplot(x, y)
            y += 1
        }
    } else if (číslo == 3) {
        x = 0
        y = 1
        led.unplot(x, y)
        y += 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 2
        }
        basic.pause(128)
        y = 1
        x = 1
        for (let index = 0; index < 3; index++) {
            led.unplot(x, y)
            y += 1
        }
        basic.pause(128)
        y = 1
        x = 2
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 2
        }
        basic.pause(128)
        x = 3
        y = 2
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 2
        }
        basic.pause(128)
        x = 4
        y = 0
        for (let index = 0; index < 5; index++) {
            led.unplot(x, y)
            y += 1
        }
    } else if (číslo == 4) {
        y = 0
        x = 0
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 2
        led.unplot(x, y)
        basic.pause(128)
        x = 1
        y = 0
        for (let index = 0; index < 3; index++) {
            led.unplot(x, y)
            y += 2
        }
        basic.pause(128)
        x = 2
        y = 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
        basic.pause(128)
        basic.pause(128)
        y = 0
        x = 4
        for (let index = 0; index < 3; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
    } else if (číslo == 5) {
        x = 0
        y = 3
        led.unplot(x, y)
        basic.pause(128)
        x = 1
        y = 1
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 2; index++) {
                led.unplot(x, y)
                y += 2
            }
            basic.pause(128)
            y += -4
            x += 1
        }
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
    } else if (číslo == 6) {
        x = 0
        y = 0
        for (let index = 0; index < 3; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
        basic.pause(128)
        y = 0
        x = 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
        basic.pause(128)
        x += 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += -3
        }
        basic.pause(128)
        y = 1
        x += 1
        for (let index = 0; index < 2; index++) {
            led.unplot(x, y)
            y += 2
        }
        basic.pause(128)
        y = 0
        x = 4
        for (let index = 0; index < 3; index++) {
            led.unplot(x, y)
            y += 1
        }
        y += 1
        led.unplot(x, y)
    }
})
