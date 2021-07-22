class Bird {
    constructor(){
        this._birdElement = document.querySelector("#bird");
        this._isAlive = true;
        this._isJumping;
        this._jumpCount;
        this._color = "yellow";

        this._flapView = ['downflap', "midflap", "upflap"];
        this._flapState = 1;

        this._startPosition = {
            top: "209px",
            left: "19%"
        }

        this.initialize();
    }
    
    initialize(){
        this.isJumping = false;
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

    get isJumping(){
        return this._isJumping;
    }
    set isJumping(isJumping){
        this._isJumping = isJumping;
    }

    get jumpCount(){
        return this._jumpCount;
    }
    set jumpCount(jumpCount){
        this._jumpCount = jumpCount;
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

    getBirdStyleTop(){
        return Number(this.birdElement.style.top.replace("px", ""));
    }
    setBirdStyleTop(newStyleTop){
        this._birdElement.style.top = `${newStyleTop}px`;
    }

    getBirdCoordinates(){
        return this.birdElement.getBoundingClientRect();
    }

    jump(){
        clearInterval(this.jumpInterval);
        clearTimeout(this.jumpTimeout);
        this.jumpCount = 0;
        this.isJumping = true;

        this.jumpInterval = setInterval(() => {
            this.jumpCount++;

            if(this.getBirdCoordinates().top > 10){
                this.setBirdStyleTop(this.getBirdStyleTop() - 2);
            }

            if(this.jumpCount > 30) {
                clearInterval(this.jumpInterval);
                this.jumpTimeout = setTimeout(() => {
                    this.isJumping = false;
                }, 90);
            }
        }, 6.25);
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