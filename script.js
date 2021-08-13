//Creating array to store the dice number
var player1 = [];
var player2 = [];

//Game mode
var gamemoderolldice = 'Player 1: game mode roll dice';
var gamemodechoosedice = 'Player 1: game mode choose dice placing';
var gamemodechoosedice2 = 'Player 2: game mode choose dice placing';

//Copy dice roll generation from 1-6
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

//Default game mode
var currentgamemode = gamemoderolldice;


var main = function (input) {
  var myOutputValue = '';
  
  // Game start: Player 1 roll dice
  if (currentgamemode == gamemoderolldice) {
    player1 = [rollDice(), rollDice()];
    console.log ('player 1 gets 2 dice numbers', player1);
    myOutputValue = 'Hi Player1 '+ '<br>' + 'You have rolled 2 die. Dice 1 is ' + player1[0] + ' Dice 2 is ' + player1[1] + '. Please select the order of your die' + '<br><br>' + 'Input 1 if you want dice 1 to be in the first position. Input 2 if you want dice 2 to be in the first position';
    
    
    currentgamemode = gamemodechoosedice;
    return myOutputValue;}

    // Player 1: Switching game mode to choose dice
    else if (currentgamemode = gamemodechoosedice) {
    //Player 1: Choosing dice position, input = 1
    if (input ==1){
      myOutputValue = 'Player 1 input 1. Your number will be ' + player1[0] + player1[1] + ' Player 2 is up next.'
    }
    //Player 1: Choosing dice position, input = 2
    if (input ==2){
      myOutputValue = 'Player 1 input 2. Your number will be ' + player1[1] + player1[0] + ' Player 2 is up next.'
    }

    currentgamemode = gamemoderolldice;
    return myOutputValue
  
  }

  //Game start: Player 2 to roll dice
  if (currentgamemode == gamemoderolldice) {
    player2 = [rollDice(), rollDice()];
    console.log ('player 2 gets 2 dice numbers', player2);
    myOutputValue = 'Hi Player2 '+ '<br>' + 'You have rolled 2 die. Dice 1 is ' + player2[0] + ' Dice 2 is ' + player2[1] + '. Please select the order of your die' + '<br><br>' + 'Input 1 if you want dice 1 to be in the first position. Input 2 if you want dice 2 to be in the first position';
    
    currentgamemode = gamemodechoosedice2;
    return myOutputValue;}

    // Player 2: Switching game mode to choose dice
    if (currentgamemode = gamemodechoosedice2) {
    //Player 2: Choosing dice position, input = 1
    if (input ==1){
      myOutputValue = 'Player 2 input 1. Your number will be ' + player2[0] + player2[1] }

    //Player 2: Choosing dice position, input = 2
    if (input ==2){
      myOutputValue = 'Player 2 input 2. Your number will be ' + player2[1] + player2[0] }
  
};

return myOutputValue;
};
