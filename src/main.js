import '../sass/main.scss';
import HighscoreModel from './model/highscores.model';
import HighscoreView from './view/highscores.view';

const highscoreModel = new HighscoreModel();
highscoreModel.load('http://localhost:3000/highscores');

const highscoreView = new HighscoreView(highscoreModel);

