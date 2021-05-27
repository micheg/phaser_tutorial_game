import Phaser from 'phaser'
import config from './cfg/cfg';
import GameScene from './scenes/GameScene'

const gameConfig = Object.assign(config,
{
    scene: [GameScene]
});

export default new Phaser.Game(gameConfig);