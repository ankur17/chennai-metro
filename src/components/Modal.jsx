import React, {Component} from 'react';
import {stationDetails} from './../helper/constants'
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let data = stationDetails[this.props.modalDataKey]
        let list_render = []
        data.adjacent.forEach((each)=>{
            list_render.push(<li key={each.name}>{each.name}, distance: {each.distance}</li>)
        })
        return (
            <div className="Modal">
                <div className="modalCard">
                    <div className="modalTitle">
                        <p> {data.name}</p>
                    </div>
                    <div className="singleLine"/>
                    <div className="modalContent">
                        <ul>
                            {list_render}
                        </ul>

                    </div>
                    <div className="modalFooter">
                        <button type="button" onClick={()=> {console.log("KMM"); this.props.modalHide()}}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal ;