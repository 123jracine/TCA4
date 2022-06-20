document.addEventListener('DOMContentLoaded', () => {

  
    // 1. create a variable called magic8Ball and set it equal to an empty object
  var magic8Ball = [] 

    // 2. set the line of code below equal to an array of 5 different answers
  magic8Ball.listOfAnswers =  ["yes", "no", "maybe", "NO", "YES"]

    // 3. hide the answer element
  magic8Ball.askQuestion = function(question) {
  document.getElementById("answer").style.opacity = "0";
    }
    
    // 4. trigger shake animation


    //5. change image to answer.png
  document.getElementById("8ball").src="img/answer.png";
   

    // 6. fade in the answer
  
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers['yes','no','maybe']

    // 7. set the answer element's text to the answer variable
  


  var onClick = function() {

    // 8. hide the answer element
  function hideAnswer() {
    document.getElementById("answer").style.opacity= "0";
  }
    // 9. change the image back to question.png
  document.getElementById("8ball").src="img/question.png"

    setTimeout(function(){
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
    }, 500);


  };

  // 10. add a click handler on the question button that calls the function onClick

	document.getElementById("questionButton").addEventListener("click", onClick);
   
});
