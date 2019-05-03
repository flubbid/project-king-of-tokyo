


// State Variables----------------------
// const turns = 3;
// Event Listeners---------------------

// Functions----------------------




//This function will generate the random number for the dice rolls.
class Game{
constructor(){
    this.one = "one"
    this.two = "two"
    this.three = "three"
    this.four = "attack"
    this.five = "energy"
    this.six = "health"
}
getRandom() {
    return Math.floor(Math.random() * (6 - 1)) + 1;
}
roll(dice) {
    let rand = this.getRandom();
    switch(rand){
        case 1:
        this.one
        break;
        case 2:
        this.two
        break;
        case 3:
        this.three
        break;
        case 4:
        this.four
        break;
        case 5:
        this.five
        break;
        case 6:
        this.six
    }
    return rand
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