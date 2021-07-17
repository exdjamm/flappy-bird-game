bgFloor = document.querySelector("#bg-floor");
bird = document.querySelector("#bird")

flap = ['downflap', "midflap", "upflap"]
flapState = 1

setInterval(()=>{
    bird.src = `../assets/sprites/birds/yellow/${flap[flapState]}.png`

    flapState = (flapState == 2) ? 0 : flapState+1 ;

}, 125);