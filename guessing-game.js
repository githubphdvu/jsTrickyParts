function guessingGame() {
  const ANSWER = Math.floor(Math.random()*5)
  let isOver = false
  let numGuesses = 0
  return function guess(num) {
    if (isOver) return "Game was over"
    numGuesses++
    if (num === ANSWER) {
      isOver = true
      const guess = numGuesses === 1 ? "guess" : "guesses"
      return `Game over:You win.${num} is correct guess in your ${numGuesses} ${guess}`
    }
    if (num < ANSWER) return `${num} is too low!`
    if (num > ANSWER) return `${num} is too high!`
  }
}
module.exports = { guessingGame }