// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, winStatus, playAgain} = props

  const imageUrl = winStatus
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-container">
      <img src={imageUrl} alt="win or lose" className="win-lose-image" />
      <div className="content-container">
        <h1 className="win-status">You {winStatus ? 'Won' : 'Lose'}</h1>
        <p className="best-score-text">{winStatus ? 'Best Score' : 'Score'}</p>
        <p className="score-numbers">{score}/12</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
