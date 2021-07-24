class GameOverScreen {
    constructor(scoreController, gameAudio){
        this._scoreController = scoreController;
        this._gameAudio = gameAudio;

        this._gameOverScreen = document.querySelector("#game-over-screen");
        this._gameOverImg = document.querySelector("#game-over-img");
        this._gameOverModal =document.querySelector("#game-over-modal");
        this._modalScore = document.querySelector("#modal-score .score-figure");
        this._modalBest = document.querySelector("#modal-best .score-figure");
        this._restartButton = document.querySelector("#restart-button");
    }

    get scoreController(){
        return this._scoreController;
    }

    get gameAudio(){
        return this._gameAudio;
    }

    get gameOverScreen(){
        return this._gameOverScreen;
    }
    set gameOverScreen(gameOverScreen){
        this._gameOverScreen = gameOverScreen;
    }

    get gameOverImg(){
        return this._gameOverImg;
    }
    set gameOverImg(gameOverImg){
        this._gameOverImg = gameOverImg;
    }

    get gameOverModal(){
        return this._gameOverModal;
    }
    set gameOverModal(gameOverModal){
        this._gameOverModal = gameOverModal;
    }

    get modalScore(){
        return this._modalScore;
    }
    set modalScore(modalScore){
        this._modalScore = modalScore;
    }

    get modalBest(){
        return this._modalBest;
    }
    set modalBest(modalBest){
        this._modalBest = modalBest;
    }

    get restartButton(){
        return this._restartButton;
    }

    showGameOverScreen(){
        this.scoreController.updateScoreInBox(this.modalScore, this.scoreController.score);
        this.scoreController.updateScoreInBox(this.modalBest, this.scoreController.maxScore);

        this.gameOverScreen.style.visibility = "visible";
        this.gameOverScreen.style.opacity = "100%";

        setTimeout(() => {
            this.gameAudio.playAudio("swoosh");
            this.gameOverImg.style.animationPlayState = 'running';
        }, 520);
        
        setTimeout(() => {
            this.gameAudio.playAudio("swoosh");
            this.gameOverModal.style.animationPlayState = 'running';

            this.restartButton.style.opacity = "1";
            this.restartButton.addEventListener("click", () => {
                document.location.reload();
            });
        }, 1100);
    }

}