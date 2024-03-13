var created = ""

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var buttonDiv = document.getElementsByClassName("schedule-side-info")[0].childNodes[5];
    var oldButton = document.getElementById("rttButton")
    
    if (oldButton) {
      return true
    }
    
    console.log(buttonDiv)
    let button = document.createElement("button")
    button.id = "rttButton"
    let text = document.createTextNode("Open in RTT")

    button.appendChild(text);
    buttonDiv.appendChild(button);

    button.onclick = function(){
      var headcode = document.getElementsByClassName("schedule-side-info")[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0].textContent
      url = "https://www.realtimetrains.co.uk/search/handler?qsearch=" + headcode + "&type=detailed"
      window.open(url, '_blank').focus();
    }
  }
)