class Floor {
    constructor(){
        this._floor = document.querySelector("#bg-floor");
        this._floorBottom = document.querySelector("#floor-bottom");

        this.initialize();
    }

    initialize(){
        this.adjustFloorBottomPadding();
        this.startLoop();
    }

    get floor(){
        return this._floor;
    }

    get floorBottom(){
        return this._floorBottom;
    }
    set floorBottom(floorBottom){
        this._floorBottom = floorBottom;
    }

    startLoop(){
        this.floor.style.animationPlayState = 'running';
    }

    stopLoop(){
        this.floor.style.animationPlayState = 'paused';
    }

    getFloorCoordinateTop(){
        return this.floor.getBoundingClientRect().top;
    }
    
    getFloorCoordinateBottom(){
        return this.floor.getBoundingClientRect().bottom;
    }

    adjustFloorBottomPadding(){
        this.floorBottom.style.paddingTop = `${Math.ceil(window.innerHeight - this.getFloorCoordinateBottom())}px`;
    }

}