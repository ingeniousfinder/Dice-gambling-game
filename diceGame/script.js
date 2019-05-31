var money = 500;
var gameOn = true;
var betValue = 0;
var betValueOn = false;
var delay = false;


function game(){
  if(delay==false){
    delay=true;
    rollDice();
    setTimeout(function(){
        delay = false;
    },700);
  }
}






function rollDice(){
  betValueChecker();
  final.style.color = "red";
  if(gameOn==true&&betValueOn==true){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var doubles = document.getElementById("doubles");
    var d1 = Math.floor(Math.random()  *6)  +1;
    var d2 = Math.floor(Math.random()  *6)  +1;
    var diceTotal = d1 + d2;
    status.innerHTML = "You rolled "+diceTotal+" !";
    var pcdie1 = document.getElementById("pcdie1");
    var pcdie2 = document.getElementById("pcdie2");
    var pcstatus = document.getElementById("pcstatus");
    var pcd1 = Math.floor(Math.random()  *6)  +1;
    var pcd2 = Math.floor(Math.random()  *6)  +1;
    var pcDiceTotal = pcd1 + pcd2;

    pcstatus.innerHTML = "Computer rolled "+pcDiceTotal+" !";
    winner(diceTotal,pcDiceTotal);
    picture(d1,d2,pcd1,pcd2)
  }
  if(money<=0){
    gameOn= false;
    alert("You lose");
  }
  refresh();
}

function winner(diceTotal,pcDiceTotal){
  var moneyh2 = document.getElementById("money");
  var final = document.getElementById("final");
  var radio25 = document.getElementById("betcheckbox25");
  var radio50 = document.getElementById("betcheckbox50");
  var radio100 = document.getElementById("betcheckbox100");
  var radioAllIn = document.getElementById("betcheckboxall");
  if(radio25.checked==true){
    var betValue = 25;
    console.log(betValue);
  }else if(radio50.checked==true){
    var betValue = 50;
  }else if(radio100.checked==true){
    var betValue = 100;
  }else if(radioAllIn.checked==true) {
    var betValue = money;
  }
  if(diceTotal==pcDiceTotal){
    console.log("tie");
    final.innerHTML= "It's A Tie";
  }else if(diceTotal>pcDiceTotal){
    console.log("userwins");
    final.innerHTML= "You Win";
    money = money + betValue;
    moneyh2.innerHTML = '$'+money;
    winsound()
  }else{
    console.log("pc wins");
    final.innerHTML = "You Lose";
    money = money - betValue;
    moneyh2.innerHTML = '$'+money;

  }
  }


  function betValueChecker(){
    var radio25 = document.getElementById("betcheckbox25");
    var radio50 = document.getElementById("betcheckbox50");
    var radio100 = document.getElementById("betcheckbox100");
    var radioAllIn = document.getElementById("betcheckboxall");
    if(radio25.checked==false&&radio50.checked==false&&radio100.checked==false&&radioAllIn.checked==false){
      betValueOn = false;
      alert("Select Bet Amount");
    }else{
      betValueOn = true;
    }
  }




function winsound(){
    var audio = new Audio('winsound.mp3');
   audio.loop = false;
   audio.play();
}
function refresh(){
  var final = document.createElement("final");
  var timer = setTimeout(function(){
    displayElementNone()

  },700);

  function displayElementNone() {
  var final = document.getElementById('final');
  final.style.color = "black";
}

}
function picture(d1,d2,pcd1,pcd2){
  if(d1==1){
    die1.innerHTML = "<img src='dicePics/dice1.png'>";
  }else if (d1==2) {
    die1.innerHTML = "<img src='dicePics/dice2.png'>";
  }else if (d1==3) {
    die1.innerHTML = "<img src='dicePics/dice3.png'>";
  }else if (d1==4) {
    die1.innerHTML = "<img src='dicePics/dice4.png'>";
  }else if (d1==5) {
    die1.innerHTML = "<img src='dicePics/dice5.png'>";
  } else {
    die1.innerHTML = "<img src='dicePics/dice6.png'>";
  }

  if(d2==1){
    die2.innerHTML = "<img src='dicePics/dice1.png'>";
  }else if (d2==2) {
    die2.innerHTML = "<img src='dicePics/dice2.png'>";
  }else if (d2==3) {
    die2.innerHTML = "<img src='dicePics/dice3.png'>";
  }else if (d2==4) {
    die2.innerHTML = "<img src='dicePics/dice4.png'>";
  }else if (d2==5) {
    die2.innerHTML = "<img src='dicePics/dice5.png'>";
  } else {
    die2.innerHTML = "<img src='dicePics/dice6.png'>";
  }

  if(pcd1==1){
    pcdie1.innerHTML = "<img src='dicePics/dice1.png'>";
  }else if (pcd1==2) {
    pcdie1.innerHTML = "<img src='dicePics/dice2.png'>";
  }else if (pcd1==3) {
    pcdie1.innerHTML = "<img src='dicePics/dice3.png'>";
  }else if (pcd1==4) {
    pcdie1.innerHTML = "<img src='dicePics/dice4.png'>";
  }else if (pcd1==5) {
    pcdie1.innerHTML = "<img src='dicePics/dice5.png'>";
  } else {
    pcdie1.innerHTML = "<img src='dicePics/dice6.png'>";
  }

  if(pcd2==1){
    pcdie2.innerHTML = "<img src='dicePics/dice1.png'>";
  }else if (pcd2==2) {
    pcdie2.innerHTML = "<img src='dicePics/dice2.png'>";
  }else if (pcd2==3) {
    pcdie2.innerHTML = "<img src='dicePics/dice3.png'>";
  }else if (pcd2==4) {
    pcdie2.innerHTML = "<img src='dicePics/dice4.png'>";
  }else if (pcd2==5) {
    pcdie2.innerHTML = "<img src='dicePics/dice5.png'>";
  } else {
    pcdie2.innerHTML = "<img src='dicePics/dice6.png'>";
  }

}
