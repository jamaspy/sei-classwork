console.log("Dashbaord.js Loaded");

$(document).ready(function () {

    // const updateBrother = () => {
    //     // $.get("/api/brother").done(function (result) {
    //     //     $("#brother").text(result);
    //     // });
    //     $("#brother").load("/api/brother")
    // };
    // setInterval(updateBrother, 3000);
    // updateBrother();

    // const updateTime = () => {
    //     $("#time").load("/api/time")
    // };

    // setInterval(updateTime, 1000)
    // updateTime()


    // const updateUptime = () => {
    //     $("#uptime").load("/api/uptime")
    // };

    // setInterval(updateUptime, 5000)
    // updateUptime()

    const getInfo = () => {
        $.getJSON("/api/info").done(function(data){
            $("#brother").text(data.brother)
            $("#time").text(data.time)
            $("#uptime").text(data.uptime)
        });
    }
    setInterval(getInfo,2000)
    getInfo()



    const updateFortune = () => {
     $("#fortune").load("/api/fortune")
    };
    setInterval(updateFortune, 15000)
    updateFortune()







});