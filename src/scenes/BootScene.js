import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene
{
    constructor()
    {
        super('boot-scene')
    }

    preload()
    {
        this.load.image('sky', 'img/sky.png');
        this.load.image('star', 'img/star.png');
        this.load.image('bomb', 'img/bomb.png');

        this.load.spritesheet('dude', 'img/dude.png',
        {
            frameWidth: 32, frameHeight: 48
        });

        this.load.bitmapFont('pixelFont', 'font/font.png', 'font/font.xml');
    }

    create()
    {
        this.scene.start('start-scene');
    }
}