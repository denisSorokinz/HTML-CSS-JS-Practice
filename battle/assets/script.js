function onload() {
    init();
}

function init() {
    var amountOfPlayers = getAmount();
    if (amountOfPlayers % 2 != 0) {
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
    for (var i = 0; i < amountOfPlayers; i++) {
        warriors[i] = initWarrior(i);
    }
    return warriors;
}

class Warrior {
    constructor() {
        this.health = 100;
        this.armor = 0,
            this.headArmor = 0,
            this.handArmor = 0,
            this.legArmor = 0,
            this.bodyArmor = 0,
            this.weaponDamage = 0,
            this.id = 0
    }
    attack(enemy, targetId, damage) {
        if (targetId === 0) {
            if (enemy.headArmor - damage >= 0) {
                enemy.headArmor -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'head for ' + damage);
            } else {
                damage -= enemy.headArmor;
                enemy.headArmor = 0;
                enemy.health -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'health for ' + damage);
            }
        }

        if (targetId === 1) {
            if (enemy.handArmor - damage >= 0) {
                enemy.handArmor -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'hand for ' + damage);
            } else {
                damage -= enemy.handArmor;
                enemy.handArmor = 0;
                enemy.health -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'health for ' + damage);
            }
        }

        if (targetId === 2) {
            if (enemy.legArmor - damage >= 0) {
                enemy.legArmor -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'leg for ' + damage);
            } else {
                damage -= enemy.legArmor;
                enemy.legArmor = 0;
                enemy.health -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'health for ' + damage);
            }
        }

        if (targetId === 3) {
            if (enemy.bodyArmor - damage >= 0) {
                enemy.bodyArmor -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'body for ' + damage);
            } else {
                damage -= enemy.bodyArmor;
                enemy.bodyArmor = 0;
                enemy.health -= damage;
                console.log('hit ' + enemy.id + '`s ' + 'health for ' + damage);
            }
        }
    }
}

function initWarrior(id) {
    var warrior = new Warrior();
    warrior.id = id;
    initWarriorArmor(warrior);
    initWarriorWeapon(warrior);
    return warrior;
}

function initWarriorArmor(warrior) {
    var isHeadArmorGiven = false;
    var isHandArmorGiven = false;
    var isLegArmorGiven = false;
    var isBodyArmorGiven = false;
    var givenArmor = 0;
    while (givenArmor < 3) {
        var part = Math.floor(Math.random() * 4);
        switch (part) {
            case 0:
                if (!isHeadArmorGiven) {
                    warrior.headArmor += Math.floor(Math.random() * 51);
                    isHeadArmorGiven = true;
                    givenArmor++;
                    break;
                }
            case 1:
                if (!isHandArmorGiven) {
                    warrior.handArmor += Math.floor(Math.random() * 51);
                    isHandArmorGiven = true;
                    givenArmor++;
                    break;
                }
            case 2:
                if (!isLegArmorGiven) {
                    warrior.legArmor += Math.floor(Math.random() * 51);
                    isLegArmorGiven = true;
                    givenArmor++;
                    break;
                }
            case 3:
                if (!isBodyArmorGiven) {
                    warrior.bodyArmor += Math.floor(Math.random() * 51);
                    isBodyArmorGiven = true;
                    givenArmor++;
                    break;
                }
        }
    }
}

function initWarriorWeapon(warrior) {
    warrior.weaponDamage = Math.floor(Math.random() * 51);
}

function initTournir(warriors) {
    var lngth = warriors.length;
    var i = 0;
    while (warriors.length != 1) {
        console.log('NEW BATTLE');
        console.log(warriors, 'before battle');
        var pair = choosePair(warriors);
        console.log(pair, pair[0].id, 'VS', pair[1].id);
        warriors.splice(warriors.indexOf(playBattle(pair[0], pair[1])), 1);
        console.log(warriors, 'after battle');
        console.log('BATTLE ENDED');
        i++;
    }
}

function choosePair(warriors) {
    var playersChosen = [];
    while (playersChosen.length != 2) {
        var warriorId = getRandomNumber(0, warriors.length - 1);
        if (warriors[warriorId].health === 100) {
            if(playersChosen.length === 1) {
                if(playersChosen[0] != warriors[warriorId]) playersChosen.push(warriors[warriorId]);
            } else {
                playersChosen.push(warriors[warriorId]);
            }
        }
    }
    return playersChosen;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playBattle(warrior1, warrior2) {
    var firstTurn = Math.floor(Math.random() * 2) === 0 ? true : false;
    while (warrior1.health > 0 && warrior2.health > 0) {
        targetId = getRandomNumber(0, 3);
        console.log('target id', targetId + ' (part of body)')
        switch (firstTurn) {
            case true:
                warrior2.attack(warrior1, targetId, warrior2.weaponDamage);
                firstTurn = false;
                break;
            case false:
                warrior1.attack(warrior2, targetId, warrior1.weaponDamage);
                firstTurn = true;
                break;
            default:
                alert('Error during battle');
                break;
        }
        if (warrior1.health <= 0) {
            warrior2.health = 100;
            console.log(warrior2.id, 'winner');
            return warrior1;
        }
        if (warrior2.health <= 0) {
            warrior1.health = 100;
            console.log(warrior1.id, 'winner');
            return warrior2;
        }
    }
}