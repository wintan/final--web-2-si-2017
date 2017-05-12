jQuery(document).ready(function(){
  
  (function getRandomQuotes() {
    
    var myTextField = document.getElementById("rqText");
    var myAuthor = document.getElementById("rqAuthor");
    var myButton = document.getElementById("newQuote");

       function getRandomColor() {
    
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
     
      var hexR = r.toString(16);
      var hexG = g.toString(16);
      var hexB = b.toString(16);
     
      if (hexR.length == 1) {
          hexR = "0" + hexR;
      }
      if (hexG.length == 1) {
          hexG = "0" + hexG;
      }
      if (hexB.length == 1) {
          hexB = "0" + hexB;
      }
     
      var hexColor = "#" + hexR + hexG + hexB;
      return hexColor.toUpperCase();
    }

    function readFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
        }
      }
      rawFile.send(null);
    }

    function prepareRandomQuote() {
      readFile("quotes.json", function(text) {
        var data = JSON.parse(text);
      
        function getRandomNumber() {
          var randNum = Math.floor(Math.random() * data.length);
          return randNum;
        }
        var myRandNum = getRandomNumber();
        myTextField.textContent = data[myRandNum].quote;
        myAuthor.textContent = data[myRandNum].author;
        myTextField.textContent + '" ' + myAuthor.textContent));
      });
    }

		function displayRandomQuote() {
      prepareRandomQuote();
      myTextField.style.color = getRandomColor();
    }
    
    displayRandomQuote();
    myButton.addEventListener('click', displayRandomQuote);
  })();
});