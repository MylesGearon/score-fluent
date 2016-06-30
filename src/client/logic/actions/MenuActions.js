import alt from '../libs/alt';

import ModalActions from './ModalActions';
import AuthActions from './AuthActions';
import GameActions from './GameActions';

import GameStore from '../stores/GameStore';

class MenuActions {

  constructor() {
    this.generateActions(
      'init',
      'registerLoginSuccess',
      'chooseOption',
      'toggleOption',
      'submitOptions',
      'setTimedMenu'
    );
  }

  updateScore() {
    return GameStore.getScore();
  }

  btnClick(btnName) {
    return dispatch => {
      switch (btnName) { // Catch clicks that trigger other actions
        case 'Register':
          ModalActions.register();
          break;
        case 'Login':
          ModalActions.login();
          break;
        case 'Logout':
          dispatch([btnName, null]);
          AuthActions.logout();
          break;
        case 'Mode':
          dispatch([btnName, GameStore.getMode()]);
          break;
        case 'Clefs':
          dispatch([btnName, GameStore.getClefs()]);
          break;
        case 'Difficulty':
          dispatch([btnName, GameStore.getDifficulty()]);
          break;
        case 'Stop':
          GameActions.stopTimed();
          dispatch([btnName, null]);
          break;
        default:
          dispatch([btnName, null]);
          break;
      }
    }
  }

}

export default alt.createActions(MenuActions);
