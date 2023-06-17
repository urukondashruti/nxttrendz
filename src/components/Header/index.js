// Write your JS code here
import './index.css'

const Header = () => (
  <div className="con5">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="size5"
      />
    </div>
    <ul className="con4">
      <li>
        <h1 className="para2">Home</h1>
      </li>
      <li>
        <h1 className="para2">Products</h1>
      </li>
      <li>
        <h1 className="para2">Cart</h1>
      </li>
      <div>
        <button type="button" className="but4">
          Logout
        </button>
      </div>
    </ul>
  </div>
)

export default Header
