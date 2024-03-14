
var url = window.location.toString();

var splitUrl = url.split("/")
console.log(splitUrl);
var serviceId = splitUrl[4].substring(6)
var year = splitUrl[5].substring(0,4)
var month = splitUrl[5].substring(5,7)
var day = splitUrl[5].substring(8,10)

var buttonDiv = document.getElementsByClassName("alter-type")[0]

let button = document.createElement("a")
button.setAttribute("class","button secondary hollow")
button.setAttribute("href","http://timetablehistory.com/times.aspx?uid=" + serviceId + "&date=" + year + month + day)
button.setAttribute("target","_blank")
button.setAttribute("style","margin:5px;")
let text  = document.createTextNode("Open Timetable History")

let button2 = document.createElement("a")
button2.setAttribute("class","button secondary hollow")
button2.setAttribute("href","https://railchecker.app/service/" + year + "-" + month + "-" + day + "/" + serviceId + "/detailed/")
button2.setAttribute("target","_blank")
let text2  = document.createTextNode("Open RailChecker")

let button3 = document.createElement("a")
button3.setAttribute("class","button secondary hollow")
button3.setAttribute("href","https://trackit.uppyjc.co.uk/TrackIT/Forms/Train.aspx?Today=" + serviceId + "&Estimate=True")
button3.setAttribute("target","_blank")
button3.setAttribute("style","margin:5px;")
let text3  = document.createTextNode("Open TrackIT!")

button.appendChild(text)
buttonDiv.appendChild(button)

button2.appendChild(text2)
buttonDiv.appendChild(button2)

button3.appendChild(text3)
buttonDiv.appendChild(button3)