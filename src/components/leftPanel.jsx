import React, {Component} from 'react';
import {cards} from './../helper/constants'

class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_selection : ""
        }
        this.loc_ref = null
        this.selectionChanged = this.selectionChanged.bind(this)
        this.optionFinalised = this.optionFinalised.bind(this)
    }

    selectionChanged(event){

        this.setState({
            search_selection:event.target.value
        })
    }

    optionFinalised(){
        // pass it to the parent

        this.props.setSearchResult(this.state.search_selection)

    }

    render() {

        const cardOptionListRender = ()=>{
            let options = []
            cards.forEach((each)=>{
                options.push(<option key={"option"+each} value={each}/>)
            })
            return options
        }

        return (
            <div className="leftBar">
                <input list="locations" name="browser" className="searchBar" placeholder="Enter Location" ref={(ref)=>this.loc_ref=ref} onChange={this.selectionChanged}/>
                    <datalist id="locations" onChange={(event)=>{console.log(event)}}  >
                        {cardOptionListRender()}
                    </datalist>
                <button type="button" className="SearchButton" onClick={this.optionFinalised}>Find</button>

            </div>
        )
    }
}

export default LeftPanel;