class HighscoreView {

    constructor(model) {
        this._model = model;

        this._model.addListener('update', () => this.render());
    }

    render() {
        console.table(this._model.highscores);
    };

}

export default HighscoreView;