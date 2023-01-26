import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesNo: 0, bananasNo: 0}

  onEatingMango = () => {
    this.setState(prevState => ({mangoesNo: prevState.mangoesNo + 1}))
  }

  onEatingBanana = () => {
    this.setState(prevState => ({bananasNo: prevState.bananasNo + 1}))
  }

  render() {
    const {mangoesNo, bananasNo} = this.state

    return (
      <div className="mainCon">
        <div className="innerCon">
          <h1 className="mainH">
            Bob ate <span className="mangoes_No">{mangoesNo}</span> mangoes{' '}
            <span className="mangoes_No">{bananasNo}</span> bananas
          </h1>
          <div className="subCon">
            <div className="imgCon">
              <img
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="bton"
                type="button"
                onClick={this.onEatingMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="imgCon">
              <img
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="bton"
                type="button"
                onClick={this.onEatingBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
