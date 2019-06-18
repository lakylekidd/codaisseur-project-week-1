import React, { Component } from 'react'

export default class Game1Contener extends Component {
  state = {
    guessDog: {
      id: 1, //num
      name: 'doggo',
      imgs: ['url 1', 'url 2'],
      img: 'url to loding img'
    }
  }

  setImgUrl = (imgs = []) => {
    const r = Math.floor(Math.random() * imgs.length)
    this.state.guessDog.img = this.state.guessDog.imgs[r]
  }

  componentDidMount() {
    this.setImgUrl()
  }

  render() {
    return (
      <div className='game1'>
        <image scr={this.state.guessDog.img} />
        <div className='guessDogs'> {/* use flexbox */} 
          <div style={`order = ${Math.floor(Math.random() * 1000)}`}></div>
        </div>
      </div>
    )
  }
}
