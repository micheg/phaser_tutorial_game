import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { KEYS } from '../cfg/assets';

import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene
{
    constructor()
    {
        super('boot-scene')
    }

    preload()
    {
        this.load.image(KEYS.SKY, 'img/sky.png');
        this.load.image(KEYS.STAR, 'img/star.png');
        this.load.image(KEYS.RED_STAR, 'img/red_star.png');
        this.load.image(KEYS.BOMB, 'img/bomb.png');
        this.load.image(KEYS.GROUND, 'img/platform.png');
        this.load.image(KEYS.BOMB_LOGO, 'img/da_bomb.png');

        this.load.spritesheet(KEYS.DUDE, 'img/dude.png',
        {
            frameWidth: 16, frameHeight: 24
        });

        this.load.bitmapFont('pixelFont', 'font/font.png', 'font/font.xml');
    }

    create()
    {
        this.scene.start('start-scene');
    }
}