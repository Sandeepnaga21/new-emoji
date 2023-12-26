import './index.css'

const WinOrLoseCard = () => {
  return (
    <>
      <div className="won-game">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won"
          className="img"
        />
        <h1 className="heading">You Won</h1>
        <p className="result">Best Score</p>
        <p className="score">12/12</p>
        <button className="button" onClick="">
          Play Again
        </button>
      </div>
      <div className="lose-game">
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="lose"
          className="img"
        />
        <h1 className="heading">You Lose</h1>
        <p className="result">Score</p>
        <p className="score">3/12</p>
        <button className="button" onClick="">
          Play Again
        </button>
      </div>
    </>
  )
}

export default WinOrLoseCard
