import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const formDetail = {username, password}
    console.log(formDetail)

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(formDetail),
    }

    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="con1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="size"
          />
        </div>
        <div className="con2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img"
          />
          <form onSubmit={this.onSubmitForm}>
            <div>
              <div className="div1">
                <div>
                  <label htmlFor="input1">USERNAME</label>
                </div>
                <input
                  id="input1"
                  type="text"
                  value={username}
                  onChange={this.username}
                  className="input1"
                />
              </div>
            </div>
            <div>
              <div className="div1">
                <div>
                  <label htmlFor="input2">PASSWORD</label>
                </div>
                <input
                  id="input2"
                  type="password"
                  value={password}
                  onChange={this.password}
                  className="input1"
                />
              </div>
            </div>
            <button type="submit" className="but">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
