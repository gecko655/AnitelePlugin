chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'anitele') {
      $('nav').toggle();
      $('#contents').css('margin-left', '0px');
    }
});
