class Pipe {
    constructor(){
        this._pipeSpawn = document.querySelector("#pipe-spawn");
        this._allPipeBox = document.querySelectorAll(".pipe-box");
        this._justPipes = {
            "topPipes": document.querySelectorAll(".pipe-top"),
            "bottomPipes": document.querySelectorAll(".pipe-bottom")
        }

        this._pipeScoreAreas = document.querySelectorAll(".space-between-pipes");

        this._pipePosY = {
            MIN: -570,
            MAX: -390
        }

        this._pipePosYIntervals = [];

        this.initialize();
    }

    initialize(){
        this.stopPipes();
        this.goToStartPosition();
    }

    get pipeSpawn(){
        return this._pipeSpawn;
    }
    set pipeSpawn(pipeSpawn){
        this._pipeSpawn = pipeSpawn;
    }

    get allPipeBox(){
        return this._allPipeBox;
    }
    set allPipeBox(allPipeBox){
        this._allPipeBox = allPipeBox;
    }

    get pipePosY(){
        return this._pipePosY;
    }

    get pipePosYIntervals(){
        return this._pipePosYIntervals;
    }
    set pipePosYIntervals(pipePosYInterval){
        this._pipePosYIntervals = pipePosYInterval;
    }
    

    get justPipes(){
        return this._justPipes;
    }

    get pipeScoreAreas(){
        return this._pipeScoreAreas;
    }

    getSpawnRight(){
        return this.pipeSpawn.getBoundingClientRect().right;
    }

    getPipeRight(pipeBox){
        return pipeBox.getBoundingClientRect().right;
    }

    getPipeStyleRight(pipeBox){
        return Number(pipeBox.style.right.replace("px", ""));
    }

    startPipes(){
        this.allPipeBox.forEach(pipe => {
            pipe.style.animationPlayState = 'running';
        });

        setTimeout(() => {
            this.allPipeBox[0].style.marginTop = `${this.getRandomPipePosY()}px`;
            this.startPipeSlide(this.allPipeBox[0]);
        }, 1750);

        setTimeout(() => {
            this.allPipeBox[1].style.marginTop = `${this.getRandomPipePosY()}px`;
            this.startPipeSlide(this.allPipeBox[1]);
        }, 3500);
    }

    startPipeSlide(pipe){
        this.changePipePosY = setInterval(() => {
            pipe.style.marginTop = `${this.getRandomPipePosY()}px`;
        }, 3500);

        this.pipePosYIntervals.push(this.changePipePosY);
    }

    stopPipes(){
        this.pipePosYIntervals.forEach(clearInterval);

        this.allPipeBox.forEach(pipe => {
            pipe.style.animationPlayState = 'paused';
        });
    }

    getRandomPipePosY(max = this.pipePosY.MAX, min = this.pipePosY.MIN){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }

    setRandomPipePosY(pipeBox){
        pipeBox.style.marginTop = `${this.getRandomPipePosY()}px`;
    }

    goToStartPosition(){
        this.allPipeBox.forEach(pipe => {
            pipe.style.right = "-170px";
        });
    }

}