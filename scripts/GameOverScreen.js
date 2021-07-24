class GameOverScreen {
    constructor(scoreController){
        this._scoreController = scoreController;
        
        this._gameOverScreen = document.querySelector("#game-over-screen");
        this._modalScore = document.querySelector("#modal-score .score-figure");
        this._modalBest = document.querySelector("#modal-best .score-figure");
        this._restartButton = document.querySelector("#restart-button");
    }

    get scoreController(){
        return this._scoreController;
    }

    get gameOverScreen(){
        return this._gameOverScreen;
    }
    set gameOverScreen(gameOverScreen){
        this._gameOverScreen = gameOverScreen;
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
        

        this.restartButton.addEventListener("click", () => {
            document.location.reload();
        });
    }
}