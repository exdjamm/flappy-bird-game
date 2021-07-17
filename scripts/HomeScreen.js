class HomeScreen {
    constructor(){
        this._content = document.querySelector("#content");
        this._initialElements = document.querySelector("#initial-elements");

        this._bird;
        this._floor;

        this.initialize();
        this.waitFirstClick();
    }

    initialize(){
        this.bird = new Bird();
        this.floor = new Floor();
        this.showInitialElements();
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

    get bird(){
        return this._bird;
    }
    set bird(bird){
        this._bird = bird;
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
    
    showInitialElements(){
        this.initialElements.style.opacity = "1";
    }
    hideInitialElements(){
        this.initialElements.style.opacity = "0";
    }

    runGame(){
        this.content.removeEventListener("click", this.clickListener, false);

        this.game = new GameController(this.bird, this.floor);
    }

}