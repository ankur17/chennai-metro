import React, {Component} from 'react';
import Card from './Card'
 class RightPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let default_s = {
            backgroundColor: "crimson",
            position: "relative",
            width: "25%",
            height: "25%",
            borderRadius: "5px"
        }
        return (
            <div className="rightBar">
                <Card style={{
                    ...default_s,
                    top : 0,
                    left : "0%"
                }}/>


                <Card style={{
                    ...default_s,
                    top : "0%",
                    left : "25%"
                }}/>


                <Card style={{
                    ...default_s,
                    top : "60%",
                    left : "60%"
                }}/>


                <Card style={{
                    ...default_s,
                    top : "90%",
                    left : "90%"
                }}/>

            </div>
        )
    }
}

export default RightPanel;