document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Hi, I'm Emily.", "I'm a creative.", "I'm a developer.", "I'm a learner."];
  
    // types until each text is finished
    function typeWriter(text, i, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait and then call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typing animation for a value in the array
     function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
        }
       
        if (i < dataText[i].length) {
          typeWriter(dataText[i], 0, function(){
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
    }
    // start the text animation
    StartTextAnimation(0);
  });