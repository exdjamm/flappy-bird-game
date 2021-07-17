class GameController {
    constructor(){
        this._content = document.querySelector("#content");
        this._gameIsStarted = false;

        this.initialize();
        this.initTouchEvents();
    }

    initialize(){
        this.bird = new Bird();
    }

    get gameIsStarted(){
        return this._gameIsStarted;
    }
    set gameIsStarted(isStarted){
        this._gameIsStarted = isStarted;
    }

    get content(){
        return this._content;
    }

    initTouchEvents(){
        this.content.addEventListener("click", ()=>{
            console.log("opa")
        }, false)
    }
}