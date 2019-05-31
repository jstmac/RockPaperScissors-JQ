$(document).ready( function() {
  var optionsArr = ["Rock", "Paper", "Scissors"]
  var userChoice;
  var compChoice;
  var wins = 0
  var loses = 0
  var ties = 0
    
    userChoice = $("#Rock").click(function(){
      alert("Rock");
      userChoice = "Rock";
      compChoice = optionsArr[Math.floor(Math.random() * optionsArr.length)];
      alert(compChoice);
      detWinner(userChoice, compChoice)
      
      
    });

    $("#Paper").click(function(){
      alert("Paper");
      userChoice = "Paper";
      var compChoice = optionsArr[Math.floor(Math.random() * optionsArr.length)];
      alert(compChoice)
      detWinner(userChoice, compChoice)
   
    });

    $("#Scissors").click(function(){
      alert("Scissors");
      userChoice = "Scissors";
      var compChoice = optionsArr[Math.floor(Math.random() * optionsArr.length)];
      alert(compChoice)
      detWinner(userChoice, compChoice)
    });

    
    function detWinner(userChoice, compChoice) {
      switch (true) {
        case compChoice === "Rock" && userChoice === "Rock":
        ties++;
        alert("Tie!");
        $('#results').text('Tie!')
        break;

        case compChoice === 'Rock' && userChoice === 'Paper':
        wins++;
        alert('Winner!');
        $('#results').text('Winner!')
        break;

        case compChoice === "Rock" && userChoice === "Scissors":
        loses++;
        alert('Sorry you lose!')
        $('#results').text('Sorry you lose!')
        break;

        case compChoice === "Paper" && userChoice === "Rock":
        loses++;
        alert("Sorry you lose!");
        $('#results').text('Sorry you lose!')
        break;

        case compChoice === "Paper" && userChoice === "Paper":
        ties++;
        alert("Tie");
        $('#results').text('Tie!')
        break;

        case compChoice === "Paper" && userChoice === "Scissors":
        wins++;
        alert("Winner!");
        $('#results').text('Winner!')
        break;

        case compChoice === "Scissors" && userChoice === "Rock":
        wins++;
        alert("Winner!");
        $('#results').text('Winner!')
        break;

        case compChoice === "Scissors" && userChoice === "Paper":
        loses++;
        alert("Sorry you lose");
        $('#results').text('Sorry you lose!')
        break;

        case compChoice === "Scissors" && userChoice === "Scissors":
        ties++;
        alert("Tie");
        $('#results').text('Tie')
        break;
      }
      return (wins, loses, ties)
      
    }
});