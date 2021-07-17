class GameController {
    constructor(bird, floor){
        this._content = document.querySelector("#content");
        this._bird = bird;
        this._floor = floor;

        this._gameIsRunning = true;
        this._gameAudio = new GameAudio();

        this.initialize();
    }

    initialize(){
        this.executeBirdFirstActions();

        this.initTouchEvents();
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

    get floor(){
        return this._floor;
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

    stopAllGameElements(){
        this.bird.stopFlap();
        this.floor.stopLoop();
        this.stopTouchEvents();
    }
}