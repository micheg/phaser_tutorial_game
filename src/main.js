import Phaser from 'phaser'
import config from './cfg/cfg';
import BootScene from './scenes/BootScene'
import StarScene from './scenes/StarScene'
import AboutScene from './scenes/AboutScene'

const gameConfig = Object.assign(config,
{
    scene: [BootScene, StarScene, AboutScene]
});

export default new Phaser.Game(gameConfig);