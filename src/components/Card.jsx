import React, {Component} from 'react';
import stationDetails from './../helper/constants'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.clicked = this.clicked.bind(this)
    }


    clicked(){
        this.props.onClick(this.props.cardKey)
    }



    render() {
        return (
            <div className="card" onClick={this.clicked}  style={{...this.props.style}} onselectstart="return false"  unselectable="on">
                <p> {this.props.text? this.props.text : ""}</p>
            </div>
        )
    }
}

export default Card;