import React, {Component} from 'react';
import Card from './Card'
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
        let default_s = {
            backgroundColor: "crimson",
            position: "absolute",
            width: "60px",
            height: "40px",
            borderRadius: "5px",

        }


        let view_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        return (
            <div className="rightBar">

                <Card style={{
                    ...default_s,
                    top : "250px",
                    left : "400px"
                }}text="US" onClick={this.click.bind(this)}/>


                <Card style={{
                    ...default_s,
                    top : "250px",
                    left : "800px"
                }} text="Go"/>


                <Card style={{
                    ...default_s,
                    top : "450px",
                    left: "800px"
                }} text="MA"/>

                <Card style={{
                    ...default_s,
                    top : "450px",
                    left : "400px"
                }} text="Co"/>

                <Card style={{
                    ...default_s,
                    top : "350px",
                    left : "600px"
                }} text="Sa"/>


                <Card style={{
                    ...default_s,
                    top : "130px",
                    left : "520px"
                }} text="Mu"/>


                <Card style={{
                    ...default_s,
                    top : "580px",
                    left : "650px"
                }} text="Ma"/>


                <Card style={{
                    ...default_s,
                    top : "580px",
                    left : "200px"
                }} text="Ex"/>


                <Card style={{
                    ...default_s,
                    top : "50px",
                    left : "700px"
                }}  ref={(ref)=>{this.reff = ref}}
                      text="Ce"/>



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
