import React, {Component} from 'react';
import {cards,keyMapper} from './../helper/constants'

class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_selection : "",
            isFinalised : false
        }

        this.selectionChanged = this.selectionChanged.bind(this)
        this.optionFinalised = this.optionFinalised.bind(this)
        this.clearOption = this.clearOption.bind(this)
    }

    selectionChanged(event){

        this.setState({
            search_selection:event.target.value
        })
    }

    optionFinalised(){
        // pass it to the parent
        this.setState({
            isFinalised: true
            // },()=>this.props.setSearchResult(this.state.search_selection))
        })

        let loc_key = keyMapper[this.state.search_selection]

        this.props.setSearchResult(loc_key)


    }

    clearOption(){
        this.setState({
            search_selection : "",
            isFinalised : false
        // },()=>this.props.setSearchResult(""))

        })

        this.props.setSearchResult("")
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
                <input list="locations" name="browser" className="searchBar" placeholder="Enter Location"  onChange={this.selectionChanged}/>
                    <datalist id="locations" onChange={(event)=>{console.log(event)}}  >
                        {cardOptionListRender()}
                    </datalist>
                {(!this.state.isFinalised) ? <button type="button" className="SearchButton" onClick={this.optionFinalised}>Find</button> : <button type="button" className="SearchClearButton" onClick={this.clearOption}>Clear</button>}

            </div>
        )
    }
}

export default LeftPanel;