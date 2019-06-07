import React,{ useState,Component } from 'react';
import LeftPanel from './leftPanel'
import RightPanel from './RightPanel';
import Heading from './Heading'
import './../styles/App.css';
import {dijkstra} from './Algo'
import {stationDistance} from './../helper/constants'

// DS to keep

// visited + disjoint set (to check loop)

// See http://en.wikipedia.org/wiki/Kruskal's_algorithm
// and http://programmingpraxis.com/2010/04/06/minimum-spanning-tree-kruskals-algorithm/












// class UnionFind {
//     constructor(elements) {
//         this.count = elements.length;
//         this.parent = {};
//         elements.forEach(e => (this.parent[e] = e));
//     }
//
//     union(a, b) {
//         let rootA = this.find(a);
//         let rootB = this.find(b);
//
//         if (rootA === rootB) return;
//
//         if (rootA < rootB) {
//             if (this.parent[b] != b) this.union(this.parent[b], a);
//             this.parent[b] = this.parent[a];
//         } else {
//             if (this.parent[a] != a) this.union(this.parent[a], b);
//             this.parent[a] = this.parent[b];
//         }
//     }
//
//     find(a) {
//         while (this.parent[a] !== a) {
//             a = this.parent[a];
//         }
//         return a;
//     }
//
//     connected(a, b) {
//         return this.find(a) === this.find(b);
//     }
// }
//
//
// function kruskalsMST() {
//     // Initialize graph that'll contain the MST
//     const MST = new Graph();
//     this.nodes.forEach(node => MST.addNode(node));
//     if (this.nodes.length === 0) {
//         return MST;
//     }
//
//     edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
//     for (let node in this.edges) {
//         this.edges[node].forEach(edge => {
//             edgeQueue.enqueue([node, edge.node], edge.weight);
//         });
//     }
//     let uf = new UnionFind(this.nodes);
//
//     while (!edgeQueue.isEmpty()) {
//         let nextEdge = edgeQueue.dequeue();
//         let nodes = nextEdge.data;
//         let weight = nextEdge.priority;
//
//         if (!uf.connected(nodes[0], nodes[1])) {
//             MST.addEdge(nodes[0], nodes[1], weight);
//             uf.union(nodes[0], nodes[1]);
//         }
//     }
//     return MST;
// }




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
