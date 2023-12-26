import './index.css'

const NavBar = props => {
  const {count} = props

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        className="img"
        alt="emoji logo"
      />
      <p className="logo-title">Emoji Game</p>
      <div className="">
        <p className="score">Score {count}</p>
        <p className="top">Top Score {count}</p>
      </div>
    </nav>
  )
}

export default NavBar
