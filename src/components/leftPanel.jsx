import React, {Component} from 'react';

class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClick(){

    }

    render() {
        return (
            <div className="lefttBar">
                <input type="text" name="firstname" value ="John"/>
                <button type="button" onClick={this.onClick}>Search</button>

            </div>
        )
    }
}

export default LeftPanel;