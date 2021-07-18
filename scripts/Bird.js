class Bird {
    constructor(){
        this._birdElement = document.querySelector("#bird");
        this._isAlive = true;
        this._color = "yellow";

        this._flapView = ['downflap', "midflap", "upflap"];
        this._flapState = 1;

        this._startPosition = {
            top: "209px",
            left: "25%"
        }

        this.initialize();
    }
    
    initialize(){
        this.goToStartPosition();
        this.startFlapWave();
        
        this._flapInterval = setInterval(() => {
            this.birdElement.src = `./assets/sprites/birds/${this.color}/${this.flapView[this.flapState]}.png`;
            this.flapState = (this.flapState == 2) ? 0 : this.flapState+1 ;
        }, 125);
    }

    get birdElement(){
        return this._birdElement;
    }
    set birdElement(newBirdElement){
        this._birdElement = newBirdElement;
    }

    get isAlive(){
        return this._isAlive;
    }
    set isAlive(isAlive){
        this._isAlive = isAlive;
    }

    get color(){
        return this._color;
    }
    set color(newColor){
        this._color = newColor;
    }

    get flapView(){
        return this._flapView;
    }

    get flapState(){
        return this._flapState;
    }
    set flapState(newFlapState){
        this._flapState = newFlapState;
    }

    get startPosition(){
        return this._startPosition;
    }

    getBirdPosY(){
        return this.birdElement.getBoundingClientRect().top;
    }

    setBirdPosY(newPosY){
        this._birdElement.style.top = newPosY;
    }

    jump(){
        //jump
    }

    goToStartPosition(){
        this.birdElement.style.top = this.startPosition.top;
        this.birdElement.style.left = this.startPosition.left;
    }

    startFlapWave(){
        this.birdElement.style.animationPlayState = 'running';
    }
    stopFlapWave(){
        this.birdElement.style.animationPlayState = 'paused';
    }

    stopFlap(){
        clearInterval(this._flapInterval);
    }
}