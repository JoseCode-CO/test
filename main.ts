basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("C5 B A G F E D C ", 106), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
