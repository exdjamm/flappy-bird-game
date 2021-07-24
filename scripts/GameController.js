class GameController {
    constructor(bird, pipes, floor, scoreController){
        this._content = document.querySelector("#content");
        this._scoreController = scoreController;
        this._bird = bird;
        this._pipes = pipes;
        this._floor = floor;
        this._gameOverScreen = new GameOverScreen(this.scoreController);

        this._gameIsRunning = true;
        this._gameAudio = new GameAudio();

        this.initialize();
    }

    initialize(){
        this.maxScore = 0;
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

    get scoreController(){
        return this._scoreController;
    }
    set scoreController(scoreController){
        this._scoreController = scoreController;
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

    get gameOverScreen(){
        return this._gameOverScreen;
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

    initFallIntervall(){
        this.fallInterval = setInterval(() => {
            let birdCoordinates = this.bird.getBirdCoordinates();

            if(!this.bird.isJumping){
                if(!this.floorIsColliding(birdCoordinates.bottom)){
                    if (this.bird.birdImg.className !== "bird-falling") {
                        this.bird.toggleBirdImgRotation("bird-falling");
                    }

                    this.bird.setBirdStyleTop(this.bird.getBirdStyleTop() + 3);
                }
                else {
                    clearInterval(this.fallInterval);
                }
            }
        }, 5);
    }

    detectAllCollisions(){
        this.birdIsInsideTheScoreArea = false;

        this.collisionsInterval = setInterval(() => {
            let birdCoordinates = this.bird.getBirdCoordinates();

            //DETECT PIPES AND FLOOR COLLISION
            if(this.topPipesAreColliding(birdCoordinates)
                || this.bottomPipesAreColliding(birdCoordinates)
                || this.floorIsColliding(birdCoordinates.bottom)){
                
                this.runGameOverActions();
            }

            //DETECT SCORE COLISION
            if(this.scoreIsColliding(birdCoordinates.right)){
                if(!this.birdIsInsideTheScoreArea){
                    this.scoreController.increaseScore();
                    this.gameAudio.playAudio("point");
                    this.birdIsInsideTheScoreArea = true;
                }
            }
            else {
                this.birdIsInsideTheScoreArea = false;
            }

        });
    }

    stopDetectAllCollisions(){
        clearInterval(this.collisionsInterval);
    }

    runGameOverActions(){
        this.gameAudio.playAudio("hit");
        
        setTimeout(() => {
            this.gameAudio.playAudio("die")
        }, 100);

        this.scoreController.updateMaxScore();
        this.stopAllGameElements();
        this.gameOverScreen.showGameOverScreen();
    }

    startAllGameElements(){
        this.scoreController.initialize();
        this.executeBirdFirstActions();
        this.initFallIntervall();
        this.pipes.startPipes();
        this.detectAllCollisions();
        this.initTouchEvents();
    }

    stopAllGameElements(){
        this.scoreController.hideScoreBoxes();
        this.bird.stopFlap();
        this.pipes.stopPipes();
        this.floor.stopLoop();
        this.stopDetectAllCollisions();
        this.stopTouchEvents();
    }

}