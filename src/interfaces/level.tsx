export default interface Level {
  type: 'cut-scene' | 'exploreable-map';
  next?: string;
}

interface Scene {
  text?: string;
  dialog?: string;
  image?: string;
}

export interface CutScene extends Level {
  scenes: Scene[];
}
