sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    APUNTENPUSHBUEN_DISPARO = sprites.createProjectileFromSprite(img`
e e a a a a a a a a a a a a a a 
a a a 8 8 8 8 8 8 8 8 8 8 8 8 a 
8 8 8 8 4 4 4 4 4 4 4 4 4 4 8 8 
4 4 4 4 4 9 9 9 9 9 9 9 9 4 4 4 
4 9 9 9 9 9 5 5 5 5 5 5 9 9 9 9 
9 9 5 5 5 5 5 3 3 3 3 5 5 5 5 5 
5 5 5 3 3 3 3 3 f f 3 3 3 3 3 5 
3 3 3 3 f 1 1 1 1 1 1 1 1 f 3 5 
2 2 2 2 1 1 1 1 1 1 1 1 1 1 3 5 
3 3 3 3 1 1 1 1 f f 1 1 1 1 3 5 
5 5 5 3 3 3 3 3 3 3 3 3 3 3 3 5 
9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a 
`, KARATE_ESPECIAL_DE_COLORINES, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.baDing.play()
})
info.onCountdownEnd(function () {
    if (info.score() >= 20) {
        game.over(true)
    }
    game.over(false)
})
let ATACARRRA_DESTRUIR_SU_NAVE: Sprite = null
let APUNTENPUSHBUEN_DISPARO: Sprite = null
let KARATE_ESPECIAL_DE_COLORINES: Sprite = null
KARATE_ESPECIAL_DE_COLORINES = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e e e e e 
. . . e e e e e e e a a a a a e 
e e e e 9 9 9 9 9 9 8 8 8 8 8 e 
2 9 9 9 9 1 8 a a 9 9 9 9 9 9 e 
2 9 7 7 7 a a 8 a 9 7 7 7 7 7 e 
2 9 8 a 7 8 d d a 9 5 5 5 5 5 e 
2 9 a a a a a a 8 9 4 4 4 4 4 e 
2 9 9 9 9 9 9 9 9 9 2 2 2 2 2 e 
e e e e e 2 2 2 2 2 e e e e e e 
. . . . e 2 6 9 6 2 e . . . . . 
. . . . e 2 9 6 9 2 e . . . . . 
. . . . e 2 6 9 6 2 e . . . . . 
. . . . e 2 2 2 2 2 e . . . . . 
. . . . e e e e e e e . . . . . 
`, SpriteKind.Player)
KARATE_ESPECIAL_DE_COLORINES.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(KARATE_ESPECIAL_DE_COLORINES, 200, 200)
info.setLife(4)
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    ATACARRRA_DESTRUIR_SU_NAVE = sprites.create(img`
a 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a 
a 5 2 2 2 2 2 2 2 2 2 2 2 2 5 a 
5 5 2 3 3 3 3 3 3 3 3 3 3 2 5 5 
5 2 2 3 8 8 8 8 8 8 8 8 3 2 2 5 
5 2 3 3 8 9 9 9 9 9 9 8 3 3 2 5 
5 2 3 8 8 9 7 9 9 7 9 8 8 3 2 5 
5 2 3 8 9 9 7 9 9 7 9 9 8 3 2 5 
5 2 3 8 9 7 7 7 7 7 7 9 8 3 2 5 
5 2 3 8 9 7 f 7 7 f 7 9 8 3 2 5 
5 2 3 8 9 7 7 7 7 7 7 9 8 3 2 5 
5 2 3 8 9 7 7 7 7 7 7 9 8 3 2 5 
5 2 3 8 9 9 9 7 7 9 9 9 8 3 2 5 
5 2 3 8 7 7 7 7 7 7 7 7 8 3 2 5 
5 2 3 8 9 9 9 7 7 9 9 9 8 3 2 5 
5 2 3 8 8 8 8 8 8 8 8 8 8 3 2 5 
5 2 3 3 3 3 3 3 3 3 3 3 3 3 2 5 
`, SpriteKind.Enemy)
    ATACARRRA_DESTRUIR_SU_NAVE.setVelocity(-80, 0)
    ATACARRRA_DESTRUIR_SU_NAVE.setPosition(180, Math.randomRange(8, 112))
})
