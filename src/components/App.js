import React,{ useState,Component } from 'react';
import LeftPanel from './leftPanel'
import RightPanel from './RightPanel';
import Heading from './Heading'
import './../styles/App.css';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchNode : ""
        }

        this.updateSearchNode = this.updateSearchNode.bind(this)

    }

    updateSearchNode(value){
        this.setState({
            searchNode : value
        })
    }

    render(){
        return (
            <div className="App">
                <div className="HeadingDiv">
                    <Heading/>
                </div>
                <div>
                    <LeftPanel setSearchResult={this.updateSearchNode} />
                    <RightPanel searchResult={this.state.searchNode}/>
                </div>
            </div>
        );
    }
}

export default App;
