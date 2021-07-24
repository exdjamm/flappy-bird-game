class ScoreController {
    constructor(){
        this._score;
        this._maxScore = localStorage.getItem('maxScore');

        this._scoreBox = document.querySelector("#score-box");
        this._maxScoreBox = document.querySelector("#max-score-box");
        this._maxScoreNumbers = document.querySelector("#max-score-numbers");
    }

    initialize(){
        this.score = 0;
        this.maxScore = (localStorage.getItem('maxScore') == null) ? 0 : this.maxScore;

        this.updateMaxScore();
        this.updateScoreInBox(this.scoreBox, this.score);
        this.showScoreBoxes();
    }

    get score(){
        return this._score;
    }
    set score(scoreValue){
        this._score = scoreValue;
    }

    get maxScore(){
        return this._maxScore;
    }
    set maxScore(maxScore){
        this._maxScore = maxScore;
    }

    get scoreBox(){
        return this._scoreBox;
    }
    set scoreBox(scoreBox){
        this._scoreBox = scoreBox;
    }

    get maxScoreBox(){
        return this._maxScoreBox;
    }
    set maxScoreBox(maxScoreBox){
        this._maxScoreBox = maxScoreBox;
    }

    get maxScoreNumbers(){
        return this._maxScoreNumbers;
    }
    set maxScoreNumbers(maxScoreNumbers){
        this._maxScoreNumbers = maxScoreNumbers;
    }

    getScoreSplitted(score){
        return score.toString().split("");
    }

    showScoreBoxes(){
        this.maxScoreBox.style.opacity = "1";
        this.scoreBox.style.opacity = "1";
    }
    hideScoreBoxes(){
        this.maxScoreBox.style.opacity = "0";
        this.scoreBox.style.opacity = "0";
    }

    createScoreImgElement(number){
        let img = document.createElement("img");
        img.src = `./assets/sprites/numbers/${number}.png`;

        return img;
    }

    updateScoreInBox(box, score){
        box.innerHTML = ""

        this.getScoreSplitted(score).forEach(number => {
            box.appendChild(this.createScoreImgElement(number));
        });
    }

    increaseScore(){
        this.score += 2;
        this.updateScoreInBox(this.scoreBox, this.score);
    }

    updateMaxScore(){
        if(this.score > this.maxScore){
            this.maxScore = this.score;
            localStorage.setItem('maxScore', this.maxScore)
        }

        this.updateScoreInBox(this.maxScoreNumbers, this.maxScore);
    }

}