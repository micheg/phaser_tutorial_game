import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene')
    }

    preload()
    {
        this.load.image('sky', 'img/sky.png');
        this.load.image('ground', 'img/platform.png');
        this.load.image('star', 'img/star.png');
        this.load.image('bomb', 'img/bomb.png');

        this.load.spritesheet('dude', 'assets/dude.png',
        {
            frameWidth: 32, frameHeight: 48
        });

        this.load.bitmapFont('pixelFont', 'font/font.png', 'font/font.xml');
    }

    create()
    {
        this.add.image(CENTER_X, CENTER_Y, 'sky');
        this.add.image(CENTER_X, CENTER_Y, 'star');
    }
}