


// State Variables----------------------

// const turns = 3;
// Event Listeners---------------------


// Functions----------------------



// potatoes
//This function will generate the random number for the dice rolls.
class Game{
    constructor(){
        this.counter = 0
        this.health = 10
        this.vp = 0
        this.energy = 0
        this.loc = 0
        this.activePlayer = 0
        document.querySelector('#endTurn').addEventListener('click', () => {
            var newPlayer = this.activePlayer + 1;
            if (newPlayer === 5){
                newPlayer = 1
            }
            this.playerTurn(newPlayer);
        })
        document.querySelector('#roll').addEventListener('click',() => {
            this.counter ++;
            if(this.counter > 3){
                alert("Next player turn")
                return
            }

            var die1 = this.getRandom();
            var die2 = this.getRandom();
            var die3 = this.getRandom();
            var die4 = this.getRandom();
            var die5 = this.getRandom();
            var die6 = this.getRandom();
            if (document.querySelector("#die1:not(.keep) > .dice") !== null){
                document.querySelector("#die1:not(.keep) > .dice").innerHTML = die1;
            }
            if (document.querySelector("#die2:not(.keep) > .dice") !== null){
                document.querySelector("#die2:not(.keep) > .dice").innerHTML = die2;
            }
            if (document.querySelector("#die3:not(.keep) > .dice") !== null){
                document.querySelector("#die3:not(.keep) > .dice").innerHTML = die3;
            }
            if (document.querySelector("#die4:not(.keep) > .dice") !== null){
                document.querySelector("#die4:not(.keep) > .dice").innerHTML = die4;
            }
            if (document.querySelector("#die5:not(.keep) > .dice") !== null){
                document.querySelector("#die5:not(.keep) > .dice").innerHTML = die5;
            }
            if (document.querySelector("#die6:not(.keep) > .dice") !== null){
                document.querySelector("#die6:not(.keep) > .dice").innerHTML = die6;
            }
        })
}
getRandom() {
    var randomRoll = Math.floor(Math.random() * (7 - 1)) + 1;
    if (randomRoll === 4){
        randomRoll = "A"
    } else if (randomRoll === 5){
        randomRoll = "E"
    } else if (randomRoll === 6){
        randomRoll = "H"
    }
        return randomRoll
}
roll() {
    let rand = this.getRandom();
    switch(rand){
        case 1:
        this.handleVP1()
        break;
        case 2:
        this.handleVP2()
        break;
        case 3:
        this.handleVP3()
        break;
        case 4:
        this.handleAttack()
        break;
        case 5:
        this.addEnergy()
        break;
        case 6:
        this.addHealth()
    }
    return rand
    }
  handleAttack(){
    // deals damage to players in a seperate location
    // if (location !== userLocation){}
    console.log("u attack")
  }
  addEnergy(){
// adds energy to the player who is rolling
    this.energy++
  }
 addHealth (){
//adds health to the player who is rolling if the are not in tokyo(loc1)
if (this.loc !== 1){
    this.health++ 
}
 }
 handleVP1 (){
     //add vp points, it takes 3 of the same dice to give the value on the dice
    console.log("You need 2 more of these to earn VP")
}
handleVP2 (){
    //add vp points, it takes 3 of the same dice to give the value on the dice
    console.log("You need 2 more of these to earn VP")  
}
handleVP3 (){
    //add vp points, it takes 3 of the same dice to give the value on the dice
    console.log("You need 2 more of these to earn VP")
    } 
playerTurn (id){
    var allPlayers = document.querySelectorAll('.player')
    for(var i = 0; i < allPlayers.length; i++){
        allPlayers[i].style.background ="none";
    }
    this.activePlayer = id;
    document.getElementById(id).style.background ="yellow";
    this.counter = 0;
    $('.dieHold').removeClass('keep')
    $('.dieHold:not(.keep) > .dice').text("0");
}
}
var newGame = new Game();


// class User{
//     constructor(){
//         this.health = 10;
//         this.energy = 0;
//         this.vp = 0;
//     }
// handleDamage(attackHeal, points) {
//  if (attackHeal === 'increase')
//  this.health += points
// } else if (attackHeal === 'decrease'){
// this.health -= points
// }
// }

// const player1 = new User()
// const player2 = new User()
// const player3 = new User()
// const player4 = new User()
// Need function to handle rolling the dice if the class is not 'keep' 






//This function will act to turn the held action on our off.


$('.dieHold').click(function() {
 if ($(this).hasClass('keep')){
     $(this).removeClass('keep')
    } else {
        $(this).addClass('keep')
    }
})