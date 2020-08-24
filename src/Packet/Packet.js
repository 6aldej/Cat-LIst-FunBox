import React from 'react'
import './Packet.css'
import catLogo from '../img/cat.png';
import classnames from 'classnames';

class Packet extends React.Component {

    constructor(props) {
      super(props)
      this.onClick = this.onClick.bind(this)
      this.state = {show: false}
    }

    onClick() {
      this.setState({ show: !this.state.show})
    }

    pFoot() {
      if (this.state.show) {
        return (
          <p className="pFoot">{this.props.ingredients}</p>
        )
      } else {
        return(
          <p className="pFoot">Что сидишь? Порадуй котэ, <a onClick={this.onClick}>купи.</a></p>
        )
      }
    }

    render() {

      const {show} = this.state
      const count1 = this.props.promotion.count.split(' ').slice(0, 1)
      const portion = this.props.promotion.count.split(' ').slice(1, 2)

      return (
            <div className={this.props.availability!==0 ? "packet" : "packetDisabled"}>
            <div onClick={this.onClick} className={classnames("positionBG", {"positionClick": show})}>
              <div className="position">
                <div className="textContent">
                  <p className="note" data-replace='Котэ не одобряет?'>{this.props.note}</p>
                  <p>{this.props.title}</p>
                  <p>{this.props.flavor}</p>
                  <p className="noteMouse"><strong>{count1}</strong> {portion}</p>
                  <p className="noteMouse"><strong>{this.props.promotion.mouseCount}</strong> {this.props.promotion.mouse}</p>
                  <p className="noteMouse">{this.props.promotion.other}</p>
                </div>
                  <img className="cat" src={catLogo} alt="cat"/>
                  <div className="weight">
                    <p>{this.props.weight.count}</p>
                    <p>{this.props.weight.unit}</p>
                  </div>
              </div>
            </div>
            {this.props.availability !== 0
              ?
              this.pFoot()
              : 
              <p className="pFootDisabled">Печалька, {this.props.flavor} закончился.</p>}
          </div>
      )
    }
}

export default Packet