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
        this.add.bitmapText(4, HEIGHT - 17, 'pixelFont', 'Menu', 20);
        let start_tet = this.add.bitmapText(CENTER_X, CENTER_Y, 'pixelFont', 'GAME', 40);
        start_tet.setOrigin(0.5, 0.5);

        // kaios softkeys
        this.input.keyboard.on( 'keydown', (e) =>
        {
            switch (e.key)
            {
                case 'SoftLeft':
                    this.scene.pause();
                    this.scene.start('start-scene');
                    break;
            }
        });
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    }

    uodate_keybind()
    {
        if (this.leftButton.isDown)
        {
            this.scene.pause();
            this.scene.start('start-scene');
        }
    }

    update()
    {
        this.uodate_keybind();
    }
}