import { GameObject } from '@erenengine/2d';

export default class LoadingScreen extends GameObject {
  constructor() {
    super(0, 0);
    this.layer = 'ui';
  }

  setProgress(progress: number) {
  }
}