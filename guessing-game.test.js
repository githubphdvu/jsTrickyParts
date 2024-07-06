const { mockRandom } = require("jest-mock-random")
const { guessingGame } = require("./guessing-game")

describe("guessingGame", function() {
  let game
  // force the random number to always be the same
  mockRandom(0.6)

  beforeEach(function() {
    game = guessingGame()
  })
  it("returns a function", function() {
    expect(game).toBeInstanceOf(Function)
  })
  it("tells you when your guess is too high", function() {
    expect(game(80)).toBe("80 is too high!")
  })
})