let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 35 || degrees > 325) {
        basic.showString("N")
    } else if (degrees < 55 || degrees > 35) {
        basic.showString("NE")
    } else if (degrees < 125 || degrees > 55) {
        basic.showString("E")
    } else if (degrees < 145 || degrees > 125) {
        basic.showString("SE")
    } else if (degrees < 215 || degrees > 145) {
        basic.showString("s")
    } else if (degrees < 235 || degrees > 215) {
        basic.showString("SW")
    } else if (degrees < 305 || degrees > 235) {
        basic.showString("W")
    } else if (degrees < 325 || degrees > 315) {
        basic.showString("NW")
    } else {
    	
    }
})
