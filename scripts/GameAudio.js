class GameAudio {
    constructor(){
        this._audioPath = "./assets/audio/"
        this._audioEffects = {
            "die": `${this.audioPath}die.ogg`,
            "hit": `${this.audioPath}hit.ogg`,
            "point": `${this.audioPath}point.ogg`,
            "swoosh": `${this.audioPath}swoosh.ogg`,
            "wing": `${this.audioPath}wing.ogg`
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