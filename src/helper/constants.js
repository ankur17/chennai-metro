/**
 * Created by ankur on 6/6/19.
 */

export const cards = ["Commutatus","USA consulate","Music Academy","Marina","Express Avenue Mall","Central Railway station","Government Museum","Sathyam Cinemas","MA Chidambaram Stadium"];

export const stationDetails = {
    commutatus : {
        name : "Commutatus",
        adjacent : [{name : "USA consulate",distance : 8},{name : "Sathyam Cinemas",distance : 16}]
    },
    usa_consulate : {
        name : "USA consulate",
        adjacent : [{name : "USA consulate",distance : 8},{name : "Sathyam Cinemas",distance : 16}]
    },
    music_academy : {
        name : "Music Academy",
        adjacent : [{name : "USA consulate",distance : 16},{name : "MA Chidambaram Stadium",distance : 4},{name : "Central Railway station",distance : 8}]
    },
    marina : {
        name : "Marina",
        adjacent : [{name : "MA Chidambaram Stadium",distance : 14},{name : "Express Avenue Mall",distance : 18}]
    },
    express_avenue_mall : {
        name : "Express Avenue Mall",
        adjacent : [{name : "Central Railway station",distance : 20},{ name : "MA Chidambaram Stadium",distance : 18}]
    },
    Central_railway_station : {
        name : "Central Railway station",
        adjacent : [{name : "Express Avenue Mall",distance:20}, {name : "MA Chidambaram Stadium",distance : 28}]
    },
    Government_museum : {
        name : "Government Museum",
        adjacent : [{name : "Sathyam Cinemas",distance:2},{name : "MA Chidambaram Stadium",distance:4},{name : "Marina",distance:12}]
    },
    sathyam_cinemas : {
        name : "Sathyam Cinemas",
        adjacent : [{name : "MA Chidambaram Stadium",distance:14},{name : "Government Museum",distance:16},{name : "Commutatus",distance:22},{name : "MA Chidambaram Stadium",distance:14}]
    },
    ma_Chidambaram_stadium : {
        name : "MA Chidambaram Stadium",
        adjacent : [{name : "Government Museum",distance:12},{name : "Marina",distance:14},{name : "Sathyam Cinemas",distance:14},{name : "Music Academy",distance:4}]
    }
}
