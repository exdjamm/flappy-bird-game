class Floor {
    constructor(){
        this._floor = document.querySelector("#bg-floor");

        this.initialize();
    }

    initialize(){
        this.startLoop();
    }

    get floor(){
        return this._floor;
    }

    startLoop(){
        this.floor.style.animationPlayState = 'running';
    }

    stopLoop(){
        this.floor.style.animationPlayState = 'paused';
    }
}