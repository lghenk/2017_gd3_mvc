import '../sass/main.scss';
import HighscoreModel from './model/highscores.model';
import HighscoreView from './view/highscores.view';

const highscoreModel = new HighscoreModel();
highscoreModel.load('http://www.studiozoetekauw.nl/ma/highscores.php');

const highscoreView = new HighscoreView(highscoreModel);