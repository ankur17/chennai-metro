import React, {Component} from 'react';
import station from './../helper/constants'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="box"  style={{...this.props.style}}>

            </div>
        )
    }
}

export default Card;