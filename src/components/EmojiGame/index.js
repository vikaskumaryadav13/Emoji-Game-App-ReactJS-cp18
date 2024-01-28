/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    emojiIds: [],
    score: 0,
    topScore: 0,
    winStatus: null,
  }

  playAgain = () => {
    this.setState({emojiIds: [], score: 0, winStatus: null})
  }

  gameStatusCheck = emojiId => {
    const {emojiIds} = this.state
    let {topScore, winStatus} = this.state

    if (emojiIds.includes(emojiId)) {
      if (topScore < emojiIds.length) {
        topScore = emojiIds.length
      }
      winStatus = false
    } else {
      emojiIds.push(emojiId)
      if (emojiIds.length === 12) {
        winStatus = true
        topScore = 12
      }
    }
    this.setState({emojiIds, winStatus, topScore, score: emojiIds.length})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, winStatus} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} winStatus={winStatus} />
        {winStatus === null ? (
          <ul className="emoji-cards-list">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                gameStatusCheck={this.gameStatusCheck}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={score}
            topScore={topScore}
            winStatus={winStatus}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
