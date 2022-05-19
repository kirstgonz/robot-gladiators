var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

// do as long as robot is alive
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        if (promptFight === 'skip' || promptFight === 'SKIP') {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

//attack enemy
    enemyHealth = Math.max(0, enemyHealth - playerAttack);
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

//Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = Math.max(0, playerMoney + 20);
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }    

//player gets attacked
    playerHealth = Math.max(playerHealth - enemyAttack);
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );  

//Check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//starts entire game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
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
    if (playerHealth > 0) {
        window.alert("Great job, you survived! You now have a score of " + playerMoney + ".");
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


startGame();