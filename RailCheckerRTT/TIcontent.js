var children =document.getElementById("lblTrainDetails").children
var length = children.length
let i = 0
serviceId = ""
RegEx = /Today's  ?([A-Z0-9]{1,6})/

while (i < length) {
    var matchtext = children[i].textContent
    if (matchtext) {
        var match = matchtext.match(RegEx)
        if (match) {
            serviceId = match[1]
        }
    }
    i = i + 1
}

var year = new Date().getFullYear()
var month = new Date().getMonth()+1
var day = new Date().getDate()

month = String(month).padStart(2, '0')
day = String(day).padStart(2, '0')

var origbutton = document.getElementById("lblModeLink")

let button = document.createElement("a")
button.setAttribute("href","http://timetablehistory.com/times.aspx?uid=" + serviceId + "&date=" + year + month + day)
button.setAttribute("target","_blank")
let text  = document.createTextNode("Open Timetable History")
button.appendChild(text)

let button2 = document.createElement("a")
button2.setAttribute("href","https://www.realtimetrains.co.uk/service/gb-nr:" + serviceId + "/" + year + "-" + month + "-" + day + "/detailed")
button2.setAttribute("target","_blank")
let text2  = document.createTextNode("Open RealTimeTrains")
button2.appendChild(text2)

let button3 = document.createElement("a")
button3.setAttribute("href","https://railchecker.app/service/" + year + "-" + month + "-" + day + "/" + serviceId + "/detailed/")
button3.setAttribute("target","_blank")
let text3  = document.createTextNode("Open RailChecker")
button3.appendChild(text3)

origbutton.after(button2)
button2.after(button)
button.after(button3)

origbutton.insertAdjacentText("afterend", " - ")
button2.insertAdjacentText("afterend", " - ")
button.insertAdjacentText("afterend", " - ")