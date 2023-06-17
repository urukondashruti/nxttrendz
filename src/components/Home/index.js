// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="con6">
      <div className="con7">
        <h1>Clothes That Get You Noticed</h1>
        <p className="para">
          Fashion is part of the daily air and it does not quit help that it
          changes all the time.Clothes have always been a marker of era and we
          are in a revolution.Your Fashion makes you been seen and heard that
          way you are.So.celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="but">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="size1"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
