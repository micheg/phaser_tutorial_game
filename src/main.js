import Phaser from 'phaser';
import config from './cfg/cfg';
import BootScene from './scenes/BootScene';
import StarScene from './scenes/StarScene';
import AboutScene from './scenes/AboutScene';
import IntroScene from './scenes/IntroScene';
import GameScene from './scenes/GameScene';
import HudScene from './scenes/HUDScene';
import ScoreScene from './scenes/ScoreScene';
import BGMusicScene from './scenes/BGMusicScene';

const gameConfig = Object.assign(config,
{
    scene: [BootScene, StarScene, AboutScene, IntroScene, GameScene, ScoreScene, HudScene, BGMusicScene]
});

export default new Phaser.Game(gameConfig);