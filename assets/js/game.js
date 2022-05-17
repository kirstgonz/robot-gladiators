// Game states
// WIN-defeated all enemies
//  -fight all enemies
//  -defeat each enemey
// LOSE-player's health <= 0

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
//Alert  players they're starting
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//choose fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

//Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

//Check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

//choose skip
} else if (promptFight === "skip" || "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }

    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}