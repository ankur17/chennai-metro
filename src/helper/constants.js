/**
 * Created by ankur on 6/6/19.
 */

export const cards = ["Commutatus","USA consulate","Music Academy","Marina","Express Avenue Mall","Central Railway station","Government Museum","Sathyam Cinemas","MA Chidambaram Stadium"];


export const keyMapper = {
    "Commutatus": "Co",
    "USA consulate": "US",
    "Music Academy": "Mu",
    "Marina": "Ma",
    "Express Avenue Mall": "Ex",
    "Central Railway station": "Ce",
    "Government Museum": "Go",
    "Sathyam Cinemas": "Sa",
    "MA Chidambaram Stadium":"MA"
}


export const nodes = ["Co",
    "US",
    "Mu",
    "Ma",
    "Ex",
    "Ce",
    "Go",
    "Sa",
    "MA"]


export const edges = [
    ["Co","US" ,8]
    ,["Co","Sa",16]
    , ["US","Sa",22]
    ,["Sa","MA",14]
    ,["US","Mu",16]
    ,["Sa","Go",2]
    , ["Mu","MA",4]
    , ["Go","MA",12]
    ,["Mu","Ce",8,]
    , ["Go","Ce",4]
    , ["Mu","Ma",14]
    ,["Ma","Ce",28]
    ,["Ma","Ex",18]
    , ["Ce","Ex",20]
]

export const stationDetails = {
    Co : {
        name : "Commutatus",
        adjacent : [{name : "USA consulate",distance : 8},{name : "Sathyam Cinemas",distance : 16}]
    },
    US : {
        name : "USA consulate",
        adjacent : [{name : "USA consulate",distance : 8},{name : "Sathyam Cinemas",distance : 16}]
    },
    Mu : {
        name : "Music Academy",
        adjacent : [{name : "USA consulate",distance : 16},{name : "MA Chidambaram Stadium",distance : 4},{name : "Central Railway station",distance : 8}]
    },
    Ma : {
        name : "Marina",
        adjacent : [{name : "MA Chidambaram Stadium",distance : 14},{name : "Express Avenue Mall",distance : 18}]
    },
    Ex : {
        name : "Express Avenue Mall",
        adjacent : [{name : "Central Railway station",distance : 20},{ name : "MA Chidambaram Stadium",distance : 18}]
    },
    Ce : {
        name : "Central Railway station",
        adjacent : [{name : "Express Avenue Mall",distance:20}, {name : "MA Chidambaram Stadium",distance : 28}]
    },
    Go : {
        name : "Government Museum",
        adjacent : [{name : "Sathyam Cinemas",distance:2},{name : "MA Chidambaram Stadium",distance:4},{name : "Marina",distance:12}]
    },
    Sa : {
        name : "Sathyam Cinemas",
        adjacent : [{name : "MA Chidambaram Stadium",distance:14},{name : "Government Museum",distance:16},{name : "Commutatus",distance:22},{name : "MA Chidambaram Stadium",distance:14}]
    },
    MA : {
        name : "MA Chidambaram Stadium",
        adjacent : [{name : "Government Museum",distance:12},{name : "Marina",distance:14},{name : "Sathyam Cinemas",distance:14},{name : "Music Academy",distance:4}]
    }
}


export const stationDistance = {
    "Co" : {"US" : 8,"Sa" :16},
    "US" : {"Sa" : 22,"Mu":16},
    "Mu" : {"US": 16 ,"MA" : 4,"Ce" : 8},
    "Ma" : {"MA": 14 ,"Ex": 18},
    "Ex ": {"Ce" : 20 ,"MA" :18},
    "Ce" : {"Ex ":20 ,"MA": 28},
    "Go" : {"Sa" : 2 ,"MA" :12 ,"Ma": 12},
    "Sa" : {"MA" :14 ,"Go" :2,"Co":22 },
    "MA" : {"Go":12 ,"Ma":14 ,"Sa" :14 ,"Mu":4}
}



export const cardPos = {
    "US": {top: "250px", left: "400px", key: "US", text: "US"},
    "Go": {top: "250px", left: "800px", key: "Go", text: "Go"},
    "MA": {top: "450px", left: "800px", key: "MA", text: "MA"},
    "Co": {top: "450px", left: "400px", key: "Co", text: "Co"},
    "Sa": {top: "350px", left: "600px", key: "Sa", text: "Sa"},
    "Mu": {top: "130px", left: "520px", key: "Mu", text: "Mu"},
    "Ma": {top: "125px", left: "200px", key: "Ma", text: "Ma"},
    "Ex": {top: "480px", left: "200px", key: "Ex", text: "Ex"},
    "Ce": {top: "50px", left: "700px", key: "Ce", text: "Ce"}
}

// [key1 ,key2]
export const roadmap= [
    ["Co" ,"US"],
    ["Co" ,"Sa"],
    ["US" ,"Sa"],
    ["Sa" ,"MA"],
    ["US" ,"Mu"],
    ["Sa" ,"Go"],
    ["Mu" ,"MA"],
    ["Go" ,"MA"],
    ["Mu" ,"Ce"],
    ["Go" ,"Ce"],
    ["Mu" ,"Ma"],
    ["Ma" ,"Ce"],
    ["Ma" ,"Ex"],
    ["Ce" ,"Ex"]
]
