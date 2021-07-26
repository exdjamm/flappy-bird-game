class HomeScreen {
    constructor(){
        this._content = document.querySelector("#content");
        this._initialElements = document.querySelector("#initial-elements");

        this._scoreController;
        this._bird;
        this._pipes;
        this._floor;

        this.initialize();
    }

    initialize(){
        this.scoreController = new ScoreController();
        this.initializeElements();
    }

    get content(){
        return this._content;
    }

    get initialElements(){
        return this._initialElements;
    }
    set initialElements(initialElements){
        this._initialElements = initialElements;
    }

    get scoreController(){
        return this._scoreController;
    }
    set scoreController(score){
        this._scoreController = score;
    }

    get bird(){
        return this._bird;
    }
    set bird(bird){
        this._bird = bird;
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
    set floor(floor){
        this._floor = floor;
    }

    waitFirstClick(){
        this.clickListener = () => {
            this.hideInitialElements();
            this.runGame();
        }

        this.content.addEventListener("click", this.clickListener, false);
    }

    initializeElements(){
        this.bird = new Bird();
        this.pipes = new Pipe();
        this.floor = new Floor();
        this.showInitialElements();

        setTimeout(() => {
            this.waitFirstClick();
        }, 400);
    }
    
    showInitialElements(){
        this.initialElements.style.opacity = "1";
    }
    hideInitialElements(){
        this.initialElements.style.opacity = "0";
    }

    runGame(){
        this.content.removeEventListener("click", this.clickListener, false);

        this.game = new GameController(this.bird, this.pipes, this.floor, this.scoreController);
    }

}