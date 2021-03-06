import { water } from '../utils/patches/tranquilPatches';
import { martianBase, martianArp, fanSequence  } from '../utils/sequences/tranquilSequences';

const tracksReducerDefaultState = {
  bleep: false,
  ambient: false,
  fan: false,
  martian: false
}

export default (state = tracksReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_BLEEP':
      martianBase.start(0).playbackRate = 2;
      return {
        ...state,
        bleep: true
      };
    case 'STOP_BLEEP':
      martianBase.stop(0);
      return {
        ...state,
        bleep: false
      }
    case 'START_AMBIENT':
      water.start();
      return {
        ...state,
        ambient: true
      };
    case 'STOP_AMBIENT':
      water.stop();
      return {
        ...state,
        ambient: false
      }
    case 'START_MARTIAN':
      martianArp.start(0).playbackRate = 2;
      return {
        ...state,
        martian: true
      };
    case 'STOP_MARTIAN':
      martianArp.stop(0);
      return {
        ...state,
        martian: false
      };
    case 'START_FAN':
      fanSequence.start(0);
      return {
        ...state,
        fan: true
      };
    case 'STOP_FAN':
      fanSequence.stop(0);
      return {
        ...state,
        fan: false
      };
    case 'RESET':
      martianBase.stop(0);
      martianArp.stop(0);
      water.stop();
      return {
        bleep: false,
        ambient: false,
        fan: false,
        martian: false
      };
    default:
      return state;
  }
}