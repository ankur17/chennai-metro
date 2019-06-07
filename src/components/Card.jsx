import React, {Component} from 'react';
import stationDetails from './../helper/constants'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card"  style={{...this.props.style}}>
                {this.props.text? this.props.text : ""}
            </div>
        )
    }
}

export default Card;