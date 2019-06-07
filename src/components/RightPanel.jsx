import React, {Component} from 'react';
import Card from './Card'
import {cardPos,roadmap} from './../helper/constants'
import {slope,pointsDistance,removePX} from './../helper/utils'
 class RightPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.reff = {}
    }

    click(){
        console.log(this.reff)
    }

    componentWillMount(){
        this.timmer = setInterval(()=>{
            console.log(this.reff)
        },2000)
    }

    componentWillUnmount(){
        clearInterval(this.timmer)
    }
    render() {
        // var ctrans = 'translate('+cleft+'px, '+ctop+'px)';

        let view_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const stt = {
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
                design.push(
                    <Card style={{
                        ...stt,
                            top : each.top,
                            left : each.left}}
                          text={each.text}
                          key ={"key_"+each.text}
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

                console.log("Check",each,point1,point2,calculated_width)
                road.push(
                    <div className="line" key={"road_"+key_increment} style={{
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
