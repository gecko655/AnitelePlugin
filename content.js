$('nav').hide();
$('#contents').css('margin-left', '0px');

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'anitele') {
    $('nav').toggle();
  }
});


onResizeFinish = function(f){
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      f()
    }, 200);
  });
}

//Resize tolerance
onResizeFinish(function(){$('nav').hide();})
