import { CutScene } from '../interfaces/level';
import Spaceship from '../assets/spaceship.png';

const start: CutScene = {
  type: `cut-scene`,
  next: `/explorable-map/crash-landing`,
  scenes: [
    {
      text: `In a distant future...`,
    },
    {
      image: Spaceship,
      dialog: `I've been hit!`,
    },
    {
      image: Spaceship,
      text: `You decend on a nearby planet...`,
    },
  ],
};

export default start;
