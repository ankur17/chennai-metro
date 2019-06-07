/**
 * Created by ankur on 7/6/19.
 */
var _ = require('underscore');
export const slope= (originX, originY, targetX, targetY)=>{
    let dx = originX - targetX;
    let dy = originY - targetY;
    let theta = Math.atan2(-dy, -dx);
    theta *= 180 / Math.PI;
    if (theta < 0) theta += 360;
    return theta;
}


export const  pointsDistance = (originX, originY, targetX, targetY)=>{
    var dx = originX - targetX;
    var dy = originY - targetY;
    return Math.sqrt(dx**2 + dy**2)
}


export const removePX = (st)=>{
    return parseInt(st.split("px")[0],10)
}


export const kruskal = (nodes, edges)=>{
    var mst = [];
    var sortedEdges = _.sortBy(edges, function(edge) { return -edge[2]; });
    var forst = _.map(nodes, function(node) { return [node]; });
    while(forst.length > 1) {
        var edge = sortedEdges.pop();
        var n1 = edge[0],
            n2 = edge[1];

        var t1 = _.filter(forst, function(tree) {
            return _.include(tree, n1);
        });

        var t2 = _.filter(forst, function(tree) {
            return _.include(tree, n2);
        });

        if (JSON.stringify(t1) != JSON.stringify(t2)) {
            forst = _.without(forst, t1[0], t2[0]);
            forst.push(_.union(t1[0], t2[0]));
            mst.push(edge);
        }
    }
    return mst;
}


