// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, winStatus} = props
  return (
    <nav className="navbar">
      <div className="nav-items-container">
        <div className="emoji-logo-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo-navbar"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        {winStatus === null ? (
          <>
            <p className="score-text">Score: {score}</p>
            <p className="score-text">Top Score: {topScore}</p>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default NavBar
