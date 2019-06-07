import React, {Component} from 'react';
import Card from './Card'
import {cardPos,roadmap} from './../helper/constants'
import {slope,pointsDistance,removePX} from './../helper/utils'
import Modal from './Modal'


const TYPE = {
    EDGE : 'edge',
    NODE : 'node'
}

const DEFAULT_CLASS = {
    EDGE : 'line',
    NODE : 'card'
}

const HIGHLIGHT = {
    EDGE : 'highLight',
    NODE : 'nodeHighLight'
}


class RightPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal : false,
            modalDataKey: ""
        }

        this.click =  this.click.bind(this)
        this.modalHide =  this.modalHide.bind(this)
        this.classNameResolver =  this.classNameResolver.bind(this)
    }

    click(card_key){

        if(!this.state.showModal){
            this.setState({
                modalDataKey: card_key,
                showModal:true
            })
        }

    }

    modalHide(){
        console.log("CLOSING")
        this.setState({
            showModal : false,
            modalDataKey: ""
        })
    }

    componentWillUnmount(){
        clearInterval(this.timmer)
    }

    classNameResolver(default_class,type, data){
        let searchResult = this.props.searchResult || "";
        if(searchResult.length>0){
            switch(type) {
                case TYPE.EDGE:
                    // here key1 and key2 is in the data
                    let key1 = data[0]
                    let key2 = data[1]

                    console.log("HMMM",key1,key2,searchResult)
                    if( (searchResult==key1) || (searchResult==key2) ){
                        return `${default_class} ${HIGHLIGHT.EDGE}`
                    }
                        break;
                case TYPE.NODE:
                    // here only key is in data
                    if (searchResult==data){
                        return `${default_class} ${HIGHLIGHT.NODE}`
                    }
                    break;
            }
        }

        return default_class

    }

    render() {
        // var ctrans = 'translate('+cleft+'px, '+ctop+'px)';

        let view_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const styles = {
            backgroundColor: "crimson",
            position: "absolute",
            width: "60px",
            height: "40px",
            borderRadius: "5px",

        }
        const cartDesignRender = ()=>{
            let design = []
            let cardPosList = Object.values(cardPos)
            for(let each of cardPosList){
                let class_name = this.classNameResolver(DEFAULT_CLASS.NODE,TYPE.NODE,each)
                if(class_name!=DEFAULT_CLASS.NODE){
                    console.log("POPOPOPOPOPOPOPOP",DEFAULT_CLASS.NODE,TYPE.NODE,each)
                }
                design.push(
                    <Card style={{
                            ...styles,
                            top : each.top,
                            left : each.left}}
                          onClick={this.click}
                          text={each.text}
                          key ={"key_"+each.key}
                          cardKey = {each.key}
                          class_name={class_name}
                    />
                )
            }
            return design
        }


        const straightRoadGenerator = ()=>{
            let road = []
            let key_increment = 0
            for(let each of roadmap){
                // each ==> [key1,key2]
                let point1 = cardPos[each[0]]
                let point2 = cardPos[each[1]]
                let p1_left = removePX(point1.left)
                let p2_left = removePX(point2.left)
                let p1_top = removePX(point1.top)
                let p2_top = removePX(point2.top)
                let calculated_width = pointsDistance(p1_left,p1_top,p2_left,p2_top)
                let calculated_slope = slope(p1_left,p1_top,p2_left,p2_top)
                key_increment += 321

                let class_name = this.classNameResolver(DEFAULT_CLASS.EDGE,TYPE.EDGE,each)

                // if(class_name==DEFAULT_CLASS.EDGE){
                //     console.log("JOJOJOJOJOJOJOJOJ",DEFAULT_CLASS.NODE,TYPE.NODE,each)
                // }

                road.push(
                    <div className={class_name} key={"road_"+key_increment} style={{
                        width: `${calculated_width}px`,
                        top : p1_top,
                        left : p1_left,
                        transform: `rotate(${calculated_slope}deg)`
                    }}/>
                )
            }
            return road;
        }

        return (
            <div className="rightBar">

                {cartDesignRender()}


                {straightRoadGenerator()}

                {this.state.showModal ? <Modal modalHide={this.modalHide} modalDataKey={this.state.modalDataKey} /> : null}



            </div>
        )
    }
}

export default RightPanel;


















/*

<div id="div1" style={{width: "100px", height: "100px", top:0, left:0, background:"#777", position:"absolute"}}></div>
<div id="div2" style={{width: "100px", height: "100px", top:"300px", left:"300px", background:"#333", position:"absolute"}}></div>

<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{height:"190"}}>
<polygon id="polygon" points="100,10 40,180 190,60" style={{stroke:"purple",strokeWidth:5}}/>
</svg>
*/
