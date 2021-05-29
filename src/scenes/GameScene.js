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
        /*this.load.image('sky', 'img/sky.png');
        this.load.image('ground', 'img/platform.png');
        this.load.image('star', 'img/star.png');
        this.load.image('bomb', 'img/bomb.png');*/

        this.load.spritesheet('dude', 'assets/dude.png',
        {
            frameWidth: 32, frameHeight: 48
        });

        this.load.bitmapFont('pixelFont', 'font/font.png', 'font/font.xml');
    }

    create()
    {
        this.add.image(CENTER_X, CENTER_Y, 'sky');
        this.add.image(CENTER_X, CENTER_Y + 50, 'star');
        this.add.image(CENTER_X, CENTER_Y - 60, 'star');
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(4, HEIGHT - 17, 'pixelFont', 'About', 20);
        this.add.bitmapText(200, HEIGHT - 17, 'pixelFont', 'Rulez', 20);
        let start_tet = this.add.bitmapText(CENTER_X, CENTER_Y, 'pixelFont', 'START', 40);
        start_tet.setOrigin(0.5, 0.5);
    }
}