import React, { Component } from 'react'
import '../Game1Contener.css'

export default class Game1Contener extends Component {
  state = {
    guessDog: {
      id: 1, //num
      name: 'doggo test',
      imgs: ['url 1', 'url 2'],
      img: 'url to loding img'
    },
    allDogs: [
      {
        id: 1,
        name: 'a doggo 1'
      },
      {
        id: 2,
        name: 'a doggo 2'
      },
      {
        id: 3,
        name: 'a doggo 3',
      },
      {
        id: 4,
        name: 'a doggo 4',
      },
      {
        id: 5,
        name: 'a doggo 5',
      },
      {
        id: 6,
        name: 'a doggo 6',
      },
      {
        id: 7,
        name: 'a doggo 7',
      }
    ],
    guessDogs: [
      {
        id: 2,
        name: 'doggo2'
      },
      {
        id: 1,
        name: 'doggo1'
      },
      {
        id: 3,
        name: 'doggo3'
      }]
  }

  setImgUrl = (imgs = this.state.guessDog.imgs) => {
    const r = Math.floor(Math.random() * imgs.length)
    this.setState({
      guessDog: {
        ...this.state.guessDog,
        img: imgs[r]
      }
    })
  }
  setData() {
    this.setGuesDog()
    this.setImgUrl()
    this.setGuesDogs()
  }
  setGuesDog() {
    // gets the guessDog
  }
  setGuesDogs() {
    let dogs = [this.state.guessDog]

    dogs = this.addNewDog(dogs)
    dogs = this.addNewDog(dogs)

    console.log("sgd's", dogs)
    this.setState({
      guessDogs: dogs
    })
  }
  addNewDog(dogs = []) {
    let c = true
    let b = 0
    let n = Math.floor(Math.random() * this.state.allDogs.length)
    while (c) {

      let c2 = false
      dogs.forEach(dog => {
        if (dog.id === n + 1) {
          c2 = true
        }
      });
      if (c2) {
        n++
        if (n >= this.state.allDogs.length) {
          n=0
        }
      } else {
        return dogs.concat([this.state.allDogs[n]])
      }

      // prevent infenet loop
      if (b > 100) {
        console.log('loop tends to infinety')
        break
      }
      b++
    }

  }

  componentDidMount() {
    this.setData()
  }

  renderDog(dog = this.state.guessDogs[0]) {
    return (
      <li className='dog'
        key={dog.id}
        style={{ order: dog.id }} >
        {dog.name}</li>
    )
  }
  render() {
    console.log('r', this.state)
    return (
      <div className='game1'>
        <img src={this.state.guessDog.img} alt={this.state.guessDog.name} />
        <ul className='guessDogs'> {/* use flexbox */}
          {this.state.guessDogs.map(this.renderDog)}
        </ul>
      </div>
    )
  }
}
