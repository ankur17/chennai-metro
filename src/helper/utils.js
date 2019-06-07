/**
 * Created by ankur on 7/6/19.
 */

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
