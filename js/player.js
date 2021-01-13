let player;

function Player(classType, health, mana, strength, agility, speed ) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility =agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        // who attacks first?
        let getPlayerspeed = player.speed;
        let getEnemyspeed = enemy.speed;

    
    // Player attacks!
        let playerAttack = function() {
            let calcBaseDamage;
            if (player.mana > 0){
                calcBaseDamage = player.strength * player.mana/1000;

            } else {
                calcBaseDamage = player.strength * player.agility/1000; 

            }
            let offsetDamage = Math.floor(Math.random()* Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            // Number of hits 

            let numberofHits = Math.floor(Math.random()* Math.floor(player.agility/10)/2) + 1;

            let attackValues = [calcOutputDamage, numberofHits];
            return attackValues;

        }

        let enemyAttack = function() {
            let calcBaseDamage;
            if (enemy.mana > 0){
                calcBaseDamage = enemy.strength * enemy.mana/1000;

            } else {
                calcBaseDamage = enemy.strength * enemy.agility/1000; 

            }
            let offsetDamage = Math.floor(Math.random()* Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            // Number of hits 

            let numberofHits = Math.floor(Math.random()* Math.floor(enemy.agility/10)/2) + 1;

            let attackValues = [calcOutputDamage, numberofHits];
            return attackValues;

        }
        //get player/enermy health
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // Initiate attacks

        if ( getPlayerspeed >= getEnemyspeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health- totalDamage;
            alert( "You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("Enemy is dead! you won");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0'; 
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();


                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health- totalDamage;
                alert( "enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You are dead!");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML =  'Health: ' + enemy.health;
                } else {
                    getPLayerHealth.innerHTML =  'Health: ' + player.health;
                }


            }


        }

        else if ( getEnemyspeed >= getPlayerspeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health- totalDamage;
            alert( "Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("you loose");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0'; 
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // player attacks
                let playerAttackValues = playerAttack();


                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health- totalDamage;
                alert( "You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    alert("You win!");
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML =  'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML =  'Health: ' + enemy.health;
                }


            }


        }


    }
}