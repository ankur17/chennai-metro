import React, {Component} from 'react';
import Card from './Card'
import {cardPos} from './../helper/constants'
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
            for(let each of cardPos){
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

        return (
            <div className="rightBar">

                {cartDesignRender()}


                <div className="line" style={{
                    width: "172px",
                    top : "20%",
                    left : "50%",
                }}/>


                <div className="line2" style={{
                    width: "232px",
                    top : "40%",
                    left : "40%",
                }}/>

                <div className="line3" style={{
                    width: "268px",
                    top : "40%",
                    left : "80%",
                }}/>



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
