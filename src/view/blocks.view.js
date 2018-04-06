class BlocksView {
    constructor(model) {
        this._model     = model;
        this._canvas    = document.getElementById('blokjesCanvasje');
        this._ctx       = this._canvas.getContext('2d');

        this._model.addListener('update', this.drawBlocks.bind(this));

        this.resize(); // Call it once for the start.
        window.addEventListener('resize', () => this.resize())
    }

    resize() {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    drawBlocks(blocks) {
        this._ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

        blocks.forEach(element => {
            this._ctx.fillStyle = element.color;
            this._ctx.fillRect(element.x,element.y,element.size,element.size);
            this._ctx.stroke();

            if(element.x > window.innerWidth + element.size/2) {
                // For the sake of the assignment. We check in the view if its out of the view eventhough we can check it in the controller
                this._model.emit('OutOfView', element); // send an event with the element that is out of view (or in case we decide to remove the window.innerWidth as the sizing)
            }
        });
    }
}

export default BlocksView;