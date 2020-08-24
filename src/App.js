import React, { Component } from 'react'
import Packet from './Packet/Packet'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      packet: [
        {note: 'Сказачное заморское яство',
        title: 'Нямушка',
        flavor: 'с фуа-гра',
        promotion: {
          count: '10 порций',
          mouseCount: '',
          mouse: 'мышь в подарок',
          other: ''
        },
        weight: {
          count: '0,5',
          unit: 'кг'
        },
        ingredients: 'Печень утки разварная с артишоками.',
        availability: 1984},

        {note: 'Сказачное заморское яство',
        title: 'Нямушка',
        flavor: 'с рыбой',
        promotion: {
          count: '40 порций',
          mouseCount: '2',
          mouse: 'мыши в подарок',
          other: ''
        },
        weight: {
          count: '2',
          unit: 'кг'
        },
        ingredients: 'Головы щучьи с чесноком да свежайщая семгушка.',
        availability: 451},

        {note: 'Сказачное заморское яство',
        title: 'Нямушка',
        flavor: 'с курой',
        promotion: {
          count: '100 порций',
          mouseCount: '5',
          mouse: 'мышей в подарок',
          other: 'заказчик доволен'
        },
        weight: {
          count: '5',
          unit: 'кг'
        },
        ingredients: 'Филе из цыплят с трюфелями в бульоне.',
        availability: 0}
      ]
    }
  }

  render() {
    let packets = null

    packets = this.state.packet.map((packet, index) => {

      return(
        <Packet 
          key={index}
          note = {packet.note}
          title = {packet.title}
          flavor = {packet.flavor}
          promotion = {packet.promotion}
          weight = {packet.weight}
          availability = {packet.availability}
          ingredients = {packet.ingredients}
        />
      )
    })

    return(
      <div>
        <div className="header">
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        <div className="wrapper">
          { packets }
        </div>
      </div>
    )
  }
}

export default App;
