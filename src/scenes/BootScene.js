import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { IMG, SND } from '../cfg/assets';

import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene
{
    constructor()
    {
        super('boot-scene')
    }

    preload()
    {
        // load images and sprites
        this.load.image(IMG.SKY, 'img/sky.png');
        this.load.image(IMG.STAR, 'img/star.png');
        this.load.image(IMG.RED_STAR, 'img/red_star.png');
        this.load.image(IMG.BOMB, 'img/bomb.png');
        this.load.image(IMG.GROUND, 'img/platform.png');
        this.load.image(IMG.BOMB_LOGO, 'img/da_bomb.png');
        this.load.image(IMG.SCORE_BG, 'img/score_bg.png');

        this.load.spritesheet(IMG.DUDE, 'img/dude.png',
        {
            frameWidth: 16, frameHeight: 24
        });

        // load fonts
        this.load.bitmapFont('pixelFont', 'font/font.png', 'font/font.xml');

        // load music
        this.load.audio(SND.PICKUP, ['snd/pickup.ogg', 'snd/pickup.mp3']);
        this.load.audio(SND.OVER, ['snd/over.ogg', 'snd/over.mp3']);
        this.load.audio(SND.BEAM, ['snd/beam.ogg', 'snd/beam.mp3']);
        this.load.audio(SND.MUSIC, ['snd/bg.ogg', 'snd/bg.mp3']);
    }

    create()
    {
        this.scene.launch('bgm-scene');
        this.scene.start('start-scene');
    }
}