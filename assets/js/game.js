var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fightOrSkip = function() {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();
    if (promptFight === '' || promptFight === null) {
        window.alert("Provide a vaild answer. Try again!");
        return fightOrSkip();
    }
    if (promptFight === 'skip') {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            shop ();
            return true;
        }
    }
}

var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) {
            break;
        }

//attack enemy
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

//Check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = Math.max(0, playerInfo.money + 20);
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }    

//player gets attacked
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );  

//Check player health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//starts entire game
var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
        
        //shop
        if (playerInfo.health >0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over. Visit store before next round?");

        //yes
        if (storeConfirm) {
            shop();
        }
    }
        } else {
            window.alert('You have lost your robot in battle! Game over!');
            break;
        }
    }
    //play again
    endGame();
}

//ends entire game
var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job, you survived! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }


//replay
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//shop
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL health, UPGRADE attack, or LEAVE? Enter one: 'REFILL', 'UPGRADE', or 'LEAVE'."
    );

//switches to pick options
switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        playerInfo.refillHealth();
        break;

    case "UPGRADE":
    case "upgrade":
        playerInfo.upgradeAttack();
        break;

    case "LEAVE":
    case "leave":
        window.alert("Leaving store.");
        break;

    default:
        window.alert("Not a valid option. Try again.");
        shop();
        break;
    }
};

//set name function
var getPlayerName = function() {
    var name = '';
        while (name === '' || name === null) {
            name = prompt("What's your robot's name?");
        }
    console.log("Your robot's name is " + name);
    return name;
};

//variables
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("Not enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("Not enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

startGame();