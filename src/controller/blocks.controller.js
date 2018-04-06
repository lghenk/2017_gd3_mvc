import EventEmitter from "../utils/eventemitter.utils";
import Blocks from "../model/blocks.model";

class BlocksController extends EventEmitter {

    constructor(){
        super();

        this.blocks = [];

        for (let i = 0; i < 150; i++) {
            this.addBlock(window.innerWidth, window.innerHeight);
        }

        setInterval(this.update.bind(this), 10); // This class shall handle the updating of the view too.
        this.addListener('OutOfView', this.outOfViewHandler.bind(this));
        this.addListener('AddNewBlock', this.addBlock.bind(this));
    }

    outOfViewHandler(element) {
        let index = this.blocks.indexOf(element);

        if(index == -1) return;
        this.blocks.splice(index, 1);

        // Also request a new block;
        this.emit('AddNewBlock'); // For the sake of the assignment (or possible future options use an event)
    }

    addBlock(randomWidth = 50, randomHeight = window.innerHeight) {
        let color = "rgb("+ Math.round(Math.random() * 255) +", "+ Math.round(Math.random() * 255) +", "+ Math.round(Math.random() * 255) + ")";
        //console.log(color);
        let block = new Blocks(Math.random() * randomWidth, Math.random() * randomHeight, Math.random() * 75 + 25, color);
        this.blocks.push(block);
    }

    update() {
        this.blocks.forEach(element => {
            element.x += 5;
        });
        this.emit("update", this.blocks);
    }
}

export default BlocksController;