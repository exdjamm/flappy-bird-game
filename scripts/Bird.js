class Bird {
    constructor(){
        this._birdElement = document.querySelector("#bird");
        this._birdImg = document.querySelector("#bird-img");
        this._isAlive = true;
        
        this._isJumping;
        this._jumpInterval;
        this._jumpTimeouts = [];
        this._jumpCount;
        
        this._colors = ["yellow", "blue", "red"];

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

        this.toggleBirdImgRotation();

        let birdColor = this.colors[Math.floor(Math.random()*this.colors.length)];
        
        this._flapInterval = setInterval(() => {
            this.birdImg.src = `./assets/sprites/birds/${birdColor}/${this.flapView[this.flapState]}.png`;
            this.flapState = (this.flapState == 2) ? 0 : this.flapState+1 ;
        }, 125);
    }

    get birdElement(){
        return this._birdElement;
    }
    set birdElement(newBirdElement){
        this._birdElement = newBirdElement;
    }

    get birdImg(){
        return this._birdImg;
    }
    set birdImg(birdImg){
        this._birdImg = birdImg;
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
    
    get jumpInterval(){
      return this._jumpInterval;
    }
    set jumpInterval(jumpInterval){
      this._jumpInterval = jumpInterval;
    }
    
    get jumpTimeouts(){
      return this._jumpTimeouts;
    }
    set jumpTimeouts(jumpTimeouts){
      this._jumpTimeouts = jumpTimeouts;
    }

    get jumpCount(){
        return this._jumpCount;
    }
    set jumpCount(jumpCount){
        this._jumpCount = jumpCount;
    }

    get colors(){
        return this._colors;
    }
    set colors(newColors){
        this._colors = newColors;
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

    toggleBirdImgRotation(className = ""){
        this.birdImg.className = className;
    }

    jump(){
        clearInterval(this.jumpInterval);
        this.jumpTimeouts.forEach(clearTimeout);

        this.jumpCount = 0;
        this.isJumping = true;

        this.jumpInterval = setInterval(() => {
            this.jumpCount++;
            this.toggleBirdImgRotation("bird-jumping");

            if(this.getBirdCoordinates().top > 10){
                this.setBirdStyleTop(this.getBirdStyleTop() - 2);
            }

            if(this.jumpCount > 32) {
                clearInterval(this.jumpInterval);
                
                let fallingStartTimeout = setTimeout(() => {
                    this.toggleBirdImgRotation("bird-falling-start");
                }, 50);

                this.jumpTimeouts.push(fallingStartTimeout);

                let fallingTimeout = setTimeout(() => {
                    this.isJumping = false;
                }, 145);

                this.jumpTimeouts.push(fallingTimeout);
            }
        }, 6);
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