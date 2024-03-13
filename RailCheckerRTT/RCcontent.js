
var url = window.location.toString();

var splitUrl = url.split("/")

var serviceId = splitUrl[5]
var year = splitUrl[4].substr(0,4)
var month = splitUrl[4].substr(5,2)
var day = splitUrl[4].substr(8,4)

var origbutton = document.getElementsByClassName("d-block")[0]

let button = document.createElement("a")
button.setAttribute("class","btn btn-primary d-block")
button.setAttribute("href","http://timetablehistory.com/times.aspx?uid=" + serviceId + "&date=" + year + month + day)
button.setAttribute("target","_blank")
let text  = document.createTextNode("Open Timetable History")
button.appendChild(text)

let button2 = document.createElement("a")
button2.setAttribute("class","btn btn-primary d-block")
button2.setAttribute("href","https://www.realtimetrains.co.uk/service/gb-nr:" + serviceId + "/" + year + "-" + month + "-" + day + "/detailed")
button2.setAttribute("target","_blank")
let text2  = document.createTextNode("Open RTT")
button2.appendChild(text2)

let button3 = document.createElement("a")
button3.setAttribute("class","btn btn-primary d-block")
button3.setAttribute("href","https://trackit.uppyjc.co.uk/TrackIT/Forms/Train.aspx?Today=" + serviceId + "&Estimate=True")
button3.setAttribute("target","_blank")
let text3  = document.createTextNode("Open TrackIT!")
button3.appendChild(text3)

br = document.createElement("br")
br2 = document.createElement("br")
br3 = document.createElement("br")

origbutton.after(br)
br.after(button2)
button2.after(br2)
br2.after(button)
button.after(br3)
br3.after(button3)

