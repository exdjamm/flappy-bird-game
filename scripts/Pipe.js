class Pipe {
    constructor(){
        this._pipeSpawn = document.querySelector("#pipe-spawn");
        this._allPipeBox = document.querySelectorAll(".pipe-box");

        this._pipePosY = {
            MIN: -570,
            MAX: -390
        }

        this._pipePosYIntervals = [];

        this.initialize();
    }

    initialize(){
        this.stopPipes();
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

    getRandomPipePosY(){
        return Math.floor(Math.random()*(this.pipePosY.MAX - this.pipePosY.MIN + 1) + this.pipePosY.MIN);
    }

    stopPipes(){
        this.pipePosYIntervals.forEach(clearInterval);

        this.allPipeBox.forEach(pipe => {
            pipe.style.animationPlayState = 'paused';
        });
    }

    removeAllPipes(){

    }
}