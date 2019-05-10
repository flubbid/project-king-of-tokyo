

//This function will generate the random number for the dice rolls.
class Game {
    constructor() {
        this.counter = 0
        this.activeUser = 1
        this.deadPlayer = []

        //this handles changing turns of the players 
        document.querySelector('#endTurn').addEventListener('click', () => {

            //this checks the index's of the current players to see if they are still active in the game.
            var allPlayers = [1, 2, 3, 4]
            allPlayers = allPlayers.filter(player => this.deadPlayer.indexOf(player) === -1)

            var indexOfCurrentPlayer = allPlayers.indexOf(this.activeUser)
            if (indexOfCurrentPlayer === allPlayers.length - 1) {
                indexOfCurrentPlayer = 0
            } else {
                indexOfCurrentPlayer++;
            }

            
            this.playerTurn(allPlayers[indexOfCurrentPlayer]);
        })
        document.querySelector('#roll').addEventListener('click', () => {
            this.counter++;
            if (this.counter > 3) {
                alert("It is the next players turn. Please buy or use your cards, and end your turn!")
                return
            }

            var die1 = this.getRandom();
            var die2 = this.getRandom();
            var die3 = this.getRandom();
            var die4 = this.getRandom();
            var die5 = this.getRandom();
            var die6 = this.getRandom();

            this.handleDiceChanges(die1, die2, die3, die4, die5, die6);
        })
    }

    getRandom() {
        var randomRoll = Math.floor(Math.random() * (7 - 1)) + 1;
        if (randomRoll === 4) {
            randomRoll = "A"
        } else if (randomRoll === 5) {
            randomRoll = "E"
        } else if (randomRoll === 6) {
            randomRoll = "H"
        }
        return randomRoll
    }

    /**
     * Functions that allows to change dices content / images
     * @param {number} die1 dice #1
     * @param {number} die2 dice #2
     * @param {number} die3 dice #3
     * @param {number} die4 dice #4
     * @param {number} die5 dice #5
     * @param {number} die6 dice #6
     */
    handleDiceChanges(die1, die2, die3, die4, die5, die6) {
        if (document.querySelector("#die1:not(.keep) > .dice") !== null) {
            document.querySelector("#die1:not(.keep) > .dice").innerHTML = die1;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die1:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die1));
        }
        if (document.querySelector("#die2:not(.keep) > .dice") !== null) {
            document.querySelector("#die2:not(.keep) > .dice").innerHTML = die2;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die2:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die2));
        }
        if (document.querySelector("#die3:not(.keep) > .dice") !== null) {
            document.querySelector("#die3:not(.keep) > .dice").innerHTML = die3;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die3:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die3));
        }
        if (document.querySelector("#die4:not(.keep) > .dice") !== null) {
            document.querySelector("#die4:not(.keep) > .dice").innerHTML = die4;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die4:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die4));
        }
        if (document.querySelector("#die5:not(.keep) > .dice") !== null) {
            document.querySelector("#die5:not(.keep) > .dice").innerHTML = die5;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die5:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die5));
        }
        if (document.querySelector("#die6:not(.keep) > .dice") !== null) {
            document.querySelector("#die6:not(.keep) > .dice").innerHTML = die6;

            // Removes all classes except 'dice' and then adds current random class (from getRandom)
            $('#die6:not(.keep) > .dice').attr('class', 'dice').addClass(this.handleClassName(die6));
        }
    }

    /*
    * Function that hadles dices classes 
    */
    handleClassName(value) {
        switch (value) {
            case 1: return 'dice_1';
            case 2: return 'dice_2';
            case 3: return 'dice_3';
            case 'A': return 'dice_attack';
            case 'E': return 'dice_energy';
            case 'H': return 'dice_health';
        }
    }

    roll() {
        let rand = this.getRandom();
        switch (rand) {
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
    handleAttack() {
        // deals damage to players in a seperate location
        var locTokyo = []
        var locOutsideTokyo = []

        if (user1.loc === 1) {
            locTokyo.push(user1)
        } else {
            locOutsideTokyo.push(user1)
        }
        if (user2.loc === 1) {
            locTokyo.push(user2)
        } else {
            locOutsideTokyo.push(user2)
        }
        if (user3.loc === 1) {
            locTokyo.push(user3)
        } else {
            locOutsideTokyo.push(user3)
        }
        if (user4.loc === 1) {
            locTokyo.push(user4)
        } else {
            locOutsideTokyo.push(user4)
        }
        // this push's the users into the outside tokyo and removes health
        if (this.activeUser === 1) {
            if (user1.loc === 1) {
                locOutsideTokyo.forEach(user => {
                    user.health--;
                })
            } else {
                locTokyo.forEach(user => {
                    user.health--;
                })
            }
        }
        if (this.activeUser === 2) {
            if (user2.loc === 1) {
                locOutsideTokyo.forEach(user => {
                    user.health--;
                })
            } else {
                locTokyo.forEach(user => {
                    user.health--;
                })
            }
        }
        if (this.activeUser === 3) {
            if (user3.loc === 1) {
                locOutsideTokyo.forEach(user => {
                    user.health--;
                })
            } else {
                locTokyo.forEach(user => {
                    user.health--;
                })
            }
        }
        if (this.activeUser === 4) {
            if (user4.loc === 1) {
                locOutsideTokyo.forEach(user => {
                    user.health--;
                })
            } else {
                locTokyo.forEach(user => {
                    user.health--;
                })
            }
        }
    }

    addEnergy() {
        // adds energy to the player who is rolling
        if (this.activeUser === 1) {
            user1.energy++;
        } else if (this.activeUser === 2) {
            user2.energy++;
        } else if (this.activeUser === 3) {
            user3.energy++;
        } else if (this.activeUser === 4) {
            user4.energy++;
        }

    }
    addHealth() {
        //adds health to the player who is rolling if the are not in tokyo(loc1)
        if (this.activeUser === 1 && user1.loc !== 1 && user1.health < 10) {
            user1.health++;
        } else if (this.activeUser === 2 && user2.loc !== 1 && user2.health < 10) {
            user2.health++;
        } else if (this.activeUser === 3 && user3.loc !== 1 && user3.health < 10) {
            user3.health++;
        } else if (this.activeUser === 4 && user4.loc !== 1 && user4.health < 10) {
            user4.health++;
        }
    }

    //this adds the victory points to the user's
    addVpPoint(points) {
        if (this.activeUser === 1) {
            user1.vP += points
        } else if (this.activeUser === 2) {
            user2.vP += points
        } else if (this.activeUser === 3) {
            user3.vP += points
        } else if (this.activeUser === 4) {
            user4.vP += points
        }

        // Checking if there's a winner
        if (user1.vP >= 20) {
            alert(`User #1 is a winner!`);
        }
        // Checking if there's a winner
        if (user2.vP >= 20) {
            alert(`User #2 is a winner!`);
        }
        // Checking if there's a winner
        if (user3.vP >= 20) {
            alert(`User #3 is a winner!`);
        }
        // Checking if there's a winner
        if (user4.vP >= 20) {
            alert(`User #4 is a winner!`);
        }
    }

    //this will show the users info 
    showUserData() {
        $("#1 > .health").text(user1.health)
        $("#1 > .vp").text(user1.vP)
        $("#1 > .energy").text(user1.energy)
        $("#1 > .loc").text((user1.loc === 1) ? "IN TOKYO" : "OUTSIDE TOKYO")
        $("#2 > .health").text(user2.health)
        $("#2 > .vp").text(user2.vP)
        $("#2 > .energy").text(user2.energy)
        $("#2 > .loc").text((user2.loc === 1) ? "IN TOKYO" : "OUTSIDE TOKYO")
        $("#3 > .health").text(user3.health)
        $("#3 > .vp").text(user3.vP)
        $("#3 > .energy").text(user3.energy)
        $("#3 > .loc").text((user3.loc === 1) ? "IN TOKYO" : "OUTSIDE TOKYO")
        $("#4 > .health").text(user4.health)
        $("#4 > .vp").text(user4.vP)
        $("#4 > .energy").text(user4.energy)
        $("#4 > .loc").text((user4.loc === 1) ? "IN TOKYO" : "OUTSIDE TOKYO")

    }

    playerTurn(id) {

        //this takes the dice output and turns it into an array.
        var dices = [];
        $('.dice').each((index, value) => {
            dices.push(value.innerHTML);
        })


        var handleVP1 = dices.filter(element => element === "1")
        if (handleVP1.length >= 3) {
            this.addVpPoint(1)
            var extraPoint = handleVP1.length - 3
            this.addVpPoint(extraPoint)
        }
        var handleVP2 = dices.filter(element => element === "2")
        if (handleVP2.length >= 3) {
            this.addVpPoint(2)
            var extraPoint = handleVP2.length - 3
            this.addVpPoint(extraPoint)
        }
        var handleVP3 = dices.filter(element => element === "3")
        if (handleVP3.length >= 3) {
            this.addVpPoint(3)
            var extraPoint = handleVP3.length - 3
            this.addVpPoint(extraPoint)
        }
        

        // this checks the dives for the elements 
        dices.filter(element => element === "E").forEach(e => {
            this.addEnergy()
        })
        
        dices.filter(element => element === "H").forEach(e => {
            this.addHealth()
        })


        //this is used to check who is inside TOKYO. 
        var userInTokyo;
        if (user1.loc === 1) {
            userInTokyo = user1
        } else if (user2.loc === 1) {
            userInTokyo = user2
        } else if (user3.loc === 1) {
            userInTokyo = user3
        } else if (user4.loc === 1) {
            userInTokyo = user4
        }
        var userInTokyoHealth = userInTokyo.health;

        //this is used to handle giving the damage
        dices.filter(element => element === "A").forEach(e => {
            this.handleAttack()
        })
        

        //this is checking the health of the player inside of tokyo, to see if he lose health and add ap promp to leave and then switchs the location to tokyo of the user who does the damage 

        if (userInTokyoHealth > userInTokyo.health) {
            if (confirm(`Player ${userInTokyo.id} you have taken ${userInTokyoHealth - userInTokyo.health} damage! Do you want to leave tokyo?`)) {
                userInTokyo.loc = 2


                switch (this.activeUser) {
                    case 1: {
                        user1.loc = 1
                        break;
                    }
                    case 2: {
                        user2.loc = 1
                        break;
                    }
                    case 3: {
                        user3.loc = 1
                        break;
                    }
                    case 4: {
                        user4.loc = 1
                        break;
                    }
                }
            }
        }
        

        //If I have more than 3 in the array then it needs to 
        var allPlayers = document.querySelectorAll('.player')
        for (var i = 0; i < allPlayers.length; i++) {
            allPlayers[i].style.background = "none";
        }
        this.activeUser = id;
        document.getElementById(id).style.background = "rgba(255, 255, 19, 0.637)";
        this.counter = 0;
        $('.dieHold').removeClass('keep');

        this.handleDiceChanges(1, 1, 1, 1, 1, 1); // reset all dices to 1

        //these check to see if the players health is 0, and then pushs the number into the deadplayer array, and will then change the background to red
        if (user1.health <= 0) {
            this.deadPlayer.push(1);
            $("#1").addClass("dead");

            user1.loc = 2;

            var newUser = [1, 2, 3, 4].filter(v => this.deadPlayer.indexOf(v) === -1)[0];

            if (newUser === 1) {
                user1.loc = 1;
            } else if (newUser === 2) {
                user2.loc = 1;
            } else if (newUser === 3) {
                user3.loc = 1;
            } else if (newUser === 4) {
                user4.loc = 1;
            }
        }
        if (user2.health <= 0) {
            this.deadPlayer.push(2);
            $("#2").addClass("dead")

            user2.loc = 2;

            var newUser = [1, 2, 3, 4].filter(v => this.deadPlayer.indexOf(v) === -1)[0];

            if (newUser === 1) {
                user1.loc = 1;
            } else if (newUser === 2) {
                user2.loc = 1;
            } else if (newUser === 3) {
                user3.loc = 1;
            } else if (newUser === 4) {
                user4.loc = 1;
            }
        }
        if (user3.health <= 0) {
            this.deadPlayer.push(3);
            $("#3").addClass("dead")

            user3.loc = 2;

            var newUser = [1, 2, 3, 4].filter(v => this.deadPlayer.indexOf(v) === -1)[0];

            if (newUser === 1) {
                user1.loc = 1;
            } else if (newUser === 2) {
                user2.loc = 1;
            } else if (newUser === 3) {
                user3.loc = 1;
            } else if (newUser === 4) {
                user4.loc = 1;
            }
        }
        if (user4.health <= 0) {
            this.deadPlayer.push(4);
            $("#4").addClass("dead")

            user4.loc = 2;

            var newUser = [1, 2, 3, 4].filter(v => this.deadPlayer.indexOf(v) === -1)[0];

            if (newUser === 1) {
                user1.loc = 1;
            } else if (newUser === 2) {
                user2.loc = 1;
            } else if (newUser === 3) {
                user3.loc = 1;
            } else if (newUser === 4) {
                user4.loc = 1;
            }
        }

        var dealPlayers = this.deadPlayer.filter((x, i, a) => a.indexOf(x) == i);
        if (dealPlayers.length >= 3) {
            if (this.deadPlayer.indexOf(1) === -1) {
                alert('User #1 is a winner.');
            }

            if (this.deadPlayer.indexOf(2) === -1) {
                alert('User #2 is a winner.');
            }

            if (this.deadPlayer.indexOf(3) === -1) {
                alert('User #3 is a winner.');
            }

            if (this.deadPlayer.indexOf(4) === -1) {
                alert('User #4 is a winner.');
            }
        }
        this.showUserData();


    }
}
var newGame = new Game();

class User {
    constructor(id) {
        this.health = 10
        this.energy = 0
        this.vP = 0
        this.id = id

        if (id === 1) {
            this.loc = 1
        }
        else { this.loc = 2 }
    }
}

var user1 = new User(1)
var user2 = new User(2)
var user3 = new User(3)
var user4 = new User(4)

newGame.playerTurn(1); // to get the game started

//This function will act to turn the held action on our off.


$('.dieHold').click(function () {
    if ($(this).hasClass('keep')) {
        $(this).removeClass('keep')
    } else {
        $(this).addClass('keep')
    }
})
