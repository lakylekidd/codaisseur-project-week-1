import React, { Component } from 'react'
import '../Game1Contener.css'

export default class Game1Contener extends Component {
  state = {
    guessDog: {
      id: 1, //num
      name: 'doggo',
      imgs: ['url 1', 'url 2'],
      img: 'url to loding img'
    },
    allDogs: [
      {
        id: 1,
        name: 'doggo',
        imgs: ['url 1', 'url 2']
      },
      {
        id: 2,
        name: 'doggo',
        imgs: ['url 1', 'url 2']
      },
      {
        id: 3,
        name: 'doggo',
        imgs: ['url 1', 'url 2']
      }
    ],
    dogs:[
      {
        id: 2,
        name: 'doggo2',
        imgs: ['url 1', 'url 2']
      },
      {
      id: 1,
      name: 'doggo1',
      imgs: ['url 1', 'url 2']
    },
    {
      id: 3,
      name: 'doggo3',
      imgs: ['url 1', 'url 2']
    }]
  }

  setImgUrl = (imgs = []) => {
    //const r = Math.floor(Math.random() * imgs.length)
    //this.state.guessDog.img = this.state.guessDog.imgs[r]
  }

  componentDidMount() {
    this.setImgUrl()
  }

  renderDog(dog = this.state.dogs[0], i) {
    console.log(dog, i)
    return (
      <li className = 'dog'
        key={dog.id}
        style={{order : dog.id }} > 
        {dog.name}</li>
    )
  }
  render() {
    return (
      <div className='game1'>
        <image scr={this.state.guessDog.img} />
        <ul className='guessDogs'> {/* use flexbox */} 
          {this.state.dogs.map(this.renderDog)}
        </ul>
      </div>
    )
  }
}
