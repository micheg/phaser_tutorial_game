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
    }

    create()
    {
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');
    }
}