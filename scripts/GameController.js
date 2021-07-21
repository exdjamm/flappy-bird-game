class GameController {
    constructor(bird, pipes, floor){
        this._content = document.querySelector("#content");
        this._bird = bird;
        this._pipes = pipes;
        this._floor = floor;

        this._score;
        this._maxScore;

        this._gameIsRunning = true;
        this._gameAudio = new GameAudio();

        this.initialize();
    }

    initialize(){
        this.score = 0;
        this.startAllGameElements();
    }

    get content(){
        return this._content;
    }

    get gameIsRunning(){
        return this._gameIsRunning;
    }
    set gameIsRunning(IsRunning){
        this._gameIsRunning = IsRunning;
    }

    get bird(){
        return this._bird;
    }

    get pipes(){
        return this._pipes;
    }
    set pipes(pipe){
        this._pipes = pipe;
    }

    get floor(){
        return this._floor;
    }

    get score(){
        return this._score;
    }
    set score(scoreValue){
        this._score = scoreValue;
    }

    get maxScore(){
        return this._maxScore;
    }
    set maxScore(maxScore){
        this._maxScore = maxScore;
    }

    get gameAudio(){
        return this._gameAudio;
    }

    jumpClick = () => {
        this.bird.jump();
        this.gameAudio.playAudio("wing");
    }

    executeBirdFirstActions(){
        this.bird.stopFlapWave();
        this.jumpClick();
    }

    initTouchEvents(){
        this.content.addEventListener("click", this.jumpClick, false);
    }
    stopTouchEvents(){
        this.content.removeEventListener("click", this.jumpClick, false);
    }

    topPipesAreColliding(birdCoordinates){
        let isColliding = false;

        this.pipes.justPipes.topPipes.forEach(pipe => {
            let pipeCoordinates = pipe.getBoundingClientRect();

            if(birdCoordinates.top <= pipeCoordinates.bottom && birdCoordinates.right >= pipeCoordinates.left && birdCoordinates.left <= pipeCoordinates.right){
                isColliding = true;
                return false;
            }
        });

        return isColliding;
    }

    bottomPipesAreColliding(birdCoordinates){
        let isColliding = false;

        this.pipes.justPipes.bottomPipes.forEach(pipe => {
            let pipeCoordinates = pipe.getBoundingClientRect(); 

            if(birdCoordinates.bottom >= pipeCoordinates.top && birdCoordinates.right >= pipeCoordinates.left && birdCoordinates.left <= pipeCoordinates.right){
                isColliding = true;
                return false;
            }
        });

        return isColliding;
    }

    scoreIsColliding(birdRight){
        let isColliding = false;

        this.pipes.pipeScoreAreas.forEach(scoreArea => {
            let scArea = scoreArea.getBoundingClientRect();
            
            if(birdRight >= scArea.left && birdRight <= scArea.right){
                isColliding = true;
                return false;
            }
        });

        return isColliding;
    }

    floorIsColliding(birdBottom){
        let isColliding = false;
        let floorTop = this.floor.getFloorCoordinateTop();

        if(birdBottom >= floorTop){
            isColliding = true;
        }

        return isColliding;
    }

    detectAllCollisions(){
        this.collisionsInterval = setInterval(() => {
            let birdCoordinates = this.bird.getBirdCoordinates();

            //DETECT PIPES AND FLOOR COLLISION
            if(this.topPipesAreColliding(birdCoordinates)
                || this.bottomPipesAreColliding(birdCoordinates)
                || this.floorIsColliding(birdCoordinates.bottom)){
                    
                this.stopAllGameElements();
            }

            //DETECT SCORE COLISION
            if(this.scoreIsColliding(birdCoordinates.right)){
                //score++
            }

        });
    }

    stopDetectAllCollisions(){
        clearInterval(this.collisionsInterval);
    }

    startAllGameElements(){
        this.executeBirdFirstActions();
        this.pipes.startPipes();
        this.detectAllCollisions();
        this.initTouchEvents();
    }

    stopAllGameElements(){
        this.bird.stopFlap();
        this.pipes.stopPipes();
        this.floor.stopLoop();
        this.stopDetectAllCollisions();
        this.stopTouchEvents();
    }

}