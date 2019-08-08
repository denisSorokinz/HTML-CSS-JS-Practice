function onload() {
    init();
}

function init() {
    var amountOfPlayers = getAmount();
    if(amountOfPlayers % 2 != 0) {
        alert('Incorrect input');
    }
    var warriors = initWarriors(amountOfPlayers);
    initTournir(warriors);
}

function getAmount() {
    return window.prompt('Enter even amount of players:');
}

function initWarriors(amountOfPlayers) {
    var warriors = [];
    for(var i = 0; i < amountOfPlayers; i++) {
        warriors[i] = initWarrior();
    }
    return warriors;
}

function Warrior() {
    this.health = 100;
    this.armor = 0,
    this.weaponDamage = 0
}

function initWarrior() {
    var warrior = new Warrior();
    initWarriorArmor(warrior);
    initWarriorWeapon(warrior);
    console.log(warrior);
    return warrior;
}

function initWarriorArmor(warrior) {
    for(var i = 0; i < 3; i++) {
        warrior.armor += Math.floor((Math.random() * 21));
    }
    warrior.health += warrior.armor;
}

function initWarriorWeapon(warrior) {
    warrior.weaponDamage = Math.floor(Math.random() * 51);
}

function initTournir(warriors) {
    while(warriors.length != 1) {
        for(var i = 0; i < warriors.length / 2; i++) {
            warriors.splice(warriors.indexOf(playBattle(warriors[i], warriors[warriors.length - 1 - i])), 1);
        }
        console.log(warriors, "alive");
    }
}

function playBattle(warrior1, warrior2) {
    var firstWarriorHealth = warrior1.health;
    var secondWarriorHealth = warrior2.health;
    var firstTurn = Math.floor(Math.random() * 2) === 0 ? true : false;
    while(warrior1.health > 0 && warrior2.health > 0) {
        switch(firstTurn) {
            case true:
                warrior2.health -= warrior1.weaponDamage;
                firstTurn = false;
                break;
            case false:
                warrior1.health -= warrior2.weaponDamage;
                firstTurn = true;
                break;
            default:
                alert('error');
                break;
        }
        if(warrior1.health <= 0) {
            console.log(warrior2, "wins")
            warrior2.health = secondWarriorHealth;
            return warrior1;
        }
        if(warrior2.health <= 0) {
            console.log(warrior1, "wins")
            warrior1.health = firstWarriorHealth;
            return warrior2;
        }
    }
}