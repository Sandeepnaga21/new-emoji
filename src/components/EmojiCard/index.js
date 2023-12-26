import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onEmojiCliked = id => {
    const {emojiDetails} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    }
    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, id],
    }))
  }

  return (
    <div className="emoji-card">
      <li className="list-Container">
        <button className="button" onClick={onEmojiCliked}>
          <img src={emojiUrl} alt={emojiName} className="img" />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard
