class GameController {
    constructor(){
        this._gameIsStarted = false;

        this.initialize();
    }

    initialize(){
        
    }

    get gameIsStarted(){
        return this._gameIsStarted;
    }
    set gameIsStarted(isStarted){
        this._gameIsStarted = isStarted;
    }
}