import EventEmitter from '../utils/eventemitter.utils';

class HighscoreModel extends EventEmitter {

    constructor(){
        super();
    }

    load(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => this.highscores = data);
    }

    set highscores(value) {
        this._highscores = value;
        this.emit('update', this._highscores);
    }

    get highscores() {
        return this._highscores;
    }
}

export default HighscoreModel;