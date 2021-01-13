let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();

    },
    resetPlayer: function(classType) {
        switch (classType) {
            case 'Batman':
                player = new Player(classType, 200, 0, 200, 100, 150);
                break;
            case 'Robin':
                player = new Player(classType, 100, 0, 300, 150, 150);
                break;
            case 'Robo':
            player = new Player(classType, 200, 100, 100, 100, 150);
            break;

            case 'Wonderwoman':
                player = new Player(classType, 400, 40, 100, 100, 150);
                break;
        
            
                
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML ='<img src= "img/heros/'+classType.toLowerCase()+'.png" class = "img-avatar"><div><h3> '+classType+' </h3><p class = "health-player"> Health: '+player.health+'</p><p> Mana: '+player.mana+'</p><p> Strength: '+player.strength+'</p><p> Agility: '+player.agility+'</p><p> Speed: '+player.speed+'</p> </div>';


    },

    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector('.action');
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p> Task: Find an enemy!</p>'
        getActions.innerHTML= '<a href="#" class="btn-prefight" onclick = "GameManager.setFight()"> Search for the enemy </a>';
        getArena.style.visibility="visible";
    },
    
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector('.action');
        let getEnemy = document.querySelector('.enemy');
        // create enemy!
        let enemy00 = new Enemy("Meta", 100, 50, 100, 60, 100);
        let enemy01 = new Enemy("Queen", 200, 150, 100, 60, 400);
        //random enemy 0 and 1
        let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                enemy= enemy00;
                
                break;
            case 1:
                enemy= enemy01;
            
                break;
        
                
        }
        

        getHeader.innerHTML = '<p> Choose your move! </p>'
        getActions.innerHTML= '<a href="#" class="btn-prefight" onclick = "PlayerMoves.calcAttack()"> Attack! </a>';
        getEnemy.innerHTML = '<img src= "img/enemy/'+enemy.enemyType.toLowerCase()+'.png" class = "img-avatar"><div><h3> '+enemy.enemyType+' </h3><p class = "health-enemy"> Health: '+enemy.health+'</p><p> Mana: '+enemy.mana+'</p><p> Strength: '+enemy.strength+'</p><p> Agility: '+enemy.agility+'</p><p> Speed: '+enemy.speed+'</p> </div>';

    }

}