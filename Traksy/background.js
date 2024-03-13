var created = false

chrome.tabs.onUpdated.addListener(
  function(tabId,changeInfo,tab){
    //if (created == false) {
        //var currTab = tabs;
        // read changeInfo data and do something with it
        // like send the new url to contentscripts.js
        //console.log(currTab.url)
      //  console.log(url)
      var response= false
      //if (changeInfo.url && changeInfo.url != "https://traksy.uk/live/") {
        response = chrome.tabs.sendMessage(tabId,{})
      //}
      created = response
    //}
  }
);