class GameController {
    constructor(bird){
        this._content = document.querySelector("#content");
        this._gameIsRunning = true;
        this._bird = bird;
        this._gameAudio = new GameAudio();

        this.initialize();
    }

    initialize(){
        this.jumpClick = () => {
            this.bird.jump();
            this.gameAudio.playAudio("wing")
        }
        
        this.jumpClick();
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

    get gameAudio(){
        return this._gameAudio;
    }

    initTouchEvents(){
        this.content.addEventListener("click", this.jumpClick, false);
    }
}