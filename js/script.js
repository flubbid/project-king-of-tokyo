


// State Variables----------------------

// const turns = 3;
// Event Listeners---------------------

// Functions----------------------




//This function will generate the random number for the dice rolls.
class Game{
constructor(){
    this.health = 10
    this.vp = 0
    this.energy = 0
    this.loc = 0
}
getRandom() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
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


// $('.die').click(function() {
//  if ($(this).hasClass('keep')){
//      $(this).removeClass('keep')
//     } else {
//         $(this).addClass('keep')
//     }
// })