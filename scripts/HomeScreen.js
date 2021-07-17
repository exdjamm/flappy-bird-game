class HomeScreen {
    constructor(){
        this._content = document.querySelector("#content");
        this._initialElements = document.querySelector("#initial-elements");

        this.initialize();
        this.waitFirstClick();
    }

    initialize(){
        this.bird = new Bird();
        this.initialElements.style.opacity = "1";
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

    waitFirstClick(){
        this.clickListener = () => {
            this.removeInitialElements();
            this.runGame();
        }

        this.content.addEventListener("click", this.clickListener, false);
    }

    removeInitialElements(){
        this.initialElements.style.opacity = "0";
    }

    runGame(){
        this.content.removeEventListener("click", this.clickListener, false);

        this.game = new GameController(this.bird);
    }

}