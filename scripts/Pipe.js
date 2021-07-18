class Pipe {
    constructor(){
        this._pipeSpawn = document.querySelector("#pipe-spawn");
        this._allPipeBox = document.querySelectorAll(".pipe-box")

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

    startPipes(){
        this.allPipeBox.forEach(pipe => {
            pipe.style.animationPlayState = 'running';
        });
    }

    stopPipes(){
        this.allPipeBox.forEach(pipe => {
            pipe.style.animationPlayState = 'paused';
        });
    }

    removeAllPipes(){

    }
}