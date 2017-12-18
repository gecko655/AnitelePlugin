chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    id: "Anitele plugin", 
    title: "あにてれの左の邪魔なバーを消す",
    documentUrlPatterns: ["https://ch.ani.tv/episodes/*"]
    }
  );
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'anitele'});
});
