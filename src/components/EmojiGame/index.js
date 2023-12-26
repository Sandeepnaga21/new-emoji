import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {count: 0, clickedEmojisList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <NavBar count={count} />
        <ul className="emoji-card">
          {this.shuffledEmojisList().map(eachOne => (
            <EmojiCard emojiDetails={eachOne} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
