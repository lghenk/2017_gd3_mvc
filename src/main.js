import '../sass/main.scss';
import HighscoreModel from './model/highscores.model';
import HighscoreView from './view/highscores.view';

import BlocksController from './controller/blocks.controller';
import BlocksView from './view/blocks.view';

const highscoreModel = new HighscoreModel();
highscoreModel.load('http://www.studiozoetekauw.nl/ma/highscores.php');

const highscoreView = new HighscoreView(highscoreModel);

const blocksController = new BlocksController();
const blocksView = new BlocksView(blocksController);