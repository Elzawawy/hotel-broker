const router = require("express").Router();

/*---------Load Broker Page Route-------------*/
router.get("/",loadBrokerPage);
function loadBrokerPage(req,res){
    if(req.session.role !== "Broker"){
        console.log("Get The Hell Out");
        res.redirect("/login");
    }
    else{
        res.render("pages/broker");
    }
}
/*-------------------------------------------*/

/*---------------Show All Hotels Route--------*/
router.get("/showHotels",loadAllHotels);
function loadAllHotelsCB(req,res,result){
    let hotels = JSON.parse(result);
    console.log(hotels);
    res.render("pages/broker_show_hotels",{hotels: hotels});
}
function loadAllHotels(req,res){
    query.hotelQueriesHandler.hotelSelect.showBrokerHotels(req,res,req.session.username,loadAllHotelsCB);
}
/*--------------------------------------------*/

/*------------Suspend Hotel Route-------------*/
router.post("/suspendHotel/:hotelName/:hotelBranch",suspendHotel);
function suspendHotelCB(req,res){
    res.redirect("/broker/showHotels")
}
function suspendHotel(req,res){
    let jsonParam = {
        isSuspended: 1
    };
    let params = [jsonParam,req.params.hotelName,req.params.hotelBranch];
    query.hotelQueriesHandler.hotelUpdate.updateHotel(req,res,params,suspendHotelCB);
}
/*--------------------------------------------*/

/*---------------Show Suspended Hotels Route--------*/
router.get("/showSuspendedHotels",loadAllSuspendedHotels);
function loadAllSuspendedHotelsCB(req,res,result){
    let hotels = JSON.parse(result);
    console.log(hotels);
    res.render("pages/broker_show_suspendedHotels",{hotels: hotels});
}
function loadAllSuspendedHotels(req,res){
    query.hotelQueriesHandler.hotelSelect.showBrokerSuspendedHotels(req,res,req.session.username,loadAllSuspendedHotelsCB);
}
/*--------------------------------------------*/

/*------------unSuspend Hotel Route-------------*/
router.post("/unsuspendHotel/:hotelName/:hotelBranch",unSuspendHotel);
function unSuspendHotelCB(req,res) {
    res.redirect("/broker/showSuspendedHotels");
}
function unSuspendHotel(req,res){
    let jsonParam = {
        isSuspended: 0
    };
    let params = [jsonParam,req.params.hotelName,req.params.hotelBranch];
    query.hotelQueriesHandler.hotelUpdate.updateHotel(req,res,params,unSuspendHotelCB);
}
/*--------------------------------------------*/

/*-------------Show ClassA Users Route--------*/
router.get("/showClassAUsers",loadClassAUsers);
function loadClassAUsersCB(req,res,result){
    let classAUsers = JSON.parse(result);
    console.log("LoadClassAUsers");
    res.render("pages/broker_show_classA",{classAUsers: classAUsers});
}
function loadClassAUsers(req,res){
    query.userQueries.userSelect.retrieveClassAList(req,res,loadClassAUsersCB);
}
/*--------------------------------------------*/

/*------------Show Suspended Users Route------------*/
router.get("/showAllUsers",loadAllUsers);
function loadAllUsersCB(req,res,result){
    let users = JSON.parse(result);
    console.log("User CB");
    console.log(users);
    res.render("pages/broker_show_allUsers",{users: users});
}
function loadAllUsers(req,res){
    query.userQueries.userSelect.retrieveUserList(req,res,loadAllUsersCB);
}
/*--------------------------------------------*/

/*------------Suspend User Route--------------*/
router.post("/suspendUser/:Username",suspendUser);
function suspendUserCB(req,res){
    res.redirect("/broker/showAllUsers");
}
function suspendUser(req,res){
    let jsonParam = {
        isBlacklisted: 1
    };
    console.log("HELLOOO ROUTEEE");
    let params = [jsonParam,req.params.Username];
    query.userQueries.userUpdate.updateUserInfo(req,res,params,suspendUserCB);
}
/*--------------------------------------------*/

/*------------Show All Users Route------------*/
router.get("/showSuspendedUsers",loadSuspendedUsers);
function loadSuspendedUsersCB(req,res,result){
    let users = JSON.parse(result);
    console.log("User CB");
    console.log(users);
    res.render("pages/broker_show_suspendedUsers",{users: users});
}
function loadSuspendedUsers(req,res){
    query.userQueries.userSelect.retrieveBlackList(req,res,loadSuspendedUsersCB);
}
/*--------------------------------------------*/

/*------------UnSuspend Users Route------------*/
router.post("/unSuspendUser/:Username",unSuspendUser);
function unSuspendedUserCB(req,res){
    res.redirect("/broker/showSuspendedUsers");
}
function unSuspendUser(req,res){
    let jsonParam = {
        isBlacklisted: 0
    };
    let params = [jsonParam,req.params.Username];
    query.userQueries.userUpdate.updateUserInfo(req,res,params,unSuspendedUserCB);
}
/*--------------------------------------------*/



module.exports = function(app) {
    app.use("/broker", router);
};
