// ==UserScript==
// @name        TimeTable History Integration
// @description Integrate Timetable History with other sources
// @match       http://timetablehistory.com/times.aspx*
// ==/UserScript==

(function () {
    'use strict';
    
    var url = window.location.toString();

    var splitUrl = url.split("=")

    var serviceId = splitUrl[1].substring(0,6)
    var year = splitUrl[2].substring(0,4)
    var month = splitUrl[2].substring(4,6)
    var day = splitUrl[2].substring(6,8)

    var buttonDiv = document.getElementsByClassName("container")[1]

    let button = document.createElement("a")
    button.setAttribute("class","btn")
    button.setAttribute("href","https://www.realtimetrains.co.uk/service/gb-nr:" + serviceId + "/" + year + "-" + month + "-" + day + "/detailed")
    button.setAttribute("target","_blank")
    button.setAttribute("style","margin:5px;")
    let text  = document.createTextNode("Open RealTimeTrains")

    let button2 = document.createElement("a")
    button2.setAttribute("class","btn")
    button2.setAttribute("href","https://railchecker.app/service/" + year + "-" + month + "-" + day + "/" + serviceId + "/")
    button2.setAttribute("target","_blank")
    let text2  = document.createTextNode("Open RailChecker")

    let button3 = document.createElement("a")
    button3.setAttribute("class","btn")
    button3.setAttribute("href","https://trackit.uppyjc.co.uk/TrackIT/Forms/Train.aspx?Today=" + serviceId + "&Estimate=True")
    button3.setAttribute("target","_blank")
    button3.setAttribute("style","margin:5px;")
    let text3  = document.createTextNode("Open TrackIT!")

    button.appendChild(text)
    buttonDiv.insertAdjacentElement("afterbegin",button)

    button2.appendChild(text2)
    buttonDiv.insertAdjacentElement("afterbegin",button2)

    button3.appendChild(text3)
    buttonDiv.insertAdjacentElement("afterbegin",button3)

})();