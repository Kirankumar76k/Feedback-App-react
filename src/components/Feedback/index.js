// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isbtnclicked: false}

  OnClickBtn = () => this.setState({isbtnclicked: true})

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachItem => (
            <li className="img-items" key={eachItem.id}>
              <button
                className="button"
                type="button"
                onClick={this.OnClickBtn}
              >
                <img
                  className="img-cls"
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                />
                <br />
                <span className="name-emoji">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isbtnclicked} = this.state
    return (
      <div className="bg-container">
        {isbtnclicked ? this.thankyouScreen() : this.feedbackQuestion()}
      </div>
    )
  }
}
export default Feedback
