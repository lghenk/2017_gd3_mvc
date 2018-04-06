import EventEmitter from '../utils/eventemitter.utils';

class Blocks {
    constructor(x, y, size, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.size = size || 10;
        this.color = color || "red";
    } 
}

export default Blocks;