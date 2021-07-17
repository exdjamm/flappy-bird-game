class GameAudio {
    constructor(){
        this._audioPath = "./assets/audio/"
        this._audioEffects = {
            "die": `${this.audioPath}die.wav`,
            "hit": `${this.audioPath}hit.wav`,
            "point": `${this.audioPath}point.wav`,
            "swoosh": `${this.audioPath}swoosh.wav`,
            "wing": `${this.audioPath}wing.wav`
        }
    }

    get audioPath(){
        return this._audioPath;
    }

    get audioEffects(){
        return this._audioEffects;
    }

    playAudio(audioName){
        this.audio = new Audio(this.audioEffects[audioName]);
        this.audio.play();
    }
}