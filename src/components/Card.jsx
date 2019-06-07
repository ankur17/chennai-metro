import React, {Component} from 'react';


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

            console.log("JJJJJ",this.props.class_name)

        return (
            <div
                className={this.props.class_name}
                onClick={this.clicked}
                style={{...this.props.style}}
                onselectstart="return false"
                unselectable="on">
                <p> {this.props.text? this.props.text : ""}</p>
            </div>
        )
    }
}

export default Card;