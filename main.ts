input.onButtonPressed(Button.A, function () {
    carro.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    carro.change(LedSpriteProperty.X, 1)
})
let obtsculo: game.LedSprite = null
let carro: game.LedSprite = null
carro = game.createSprite(2, 3)
basic.forever(function () {
    basic.pause(randint(0.1, 0.1))
    obtsculo = game.createSprite(randint(0, 3), 0)
    for (let index = 0; index < 3; index++) {
        basic.pause(150)
        obtsculo.change(LedSpriteProperty.Y, 1)
    }
    if (obtsculo.isTouching(carro)) {
        game.gameOver()
    }
    basic.pause(200)
    obtsculo.delete()
})
