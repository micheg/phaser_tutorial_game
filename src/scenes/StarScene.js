import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import Phaser from 'phaser'

export default class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('start-scene')
    }

    preload()
    {
    }

    create()
    {
        // ui
        this.add.image(CENTER_X, CENTER_Y, 'sky');
        this.add.image(CENTER_X, CENTER_Y + 50, 'star');
        this.add.image(CENTER_X, CENTER_Y - 60, 'star');
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(4, HEIGHT - 17, 'pixelFont', 'About', 20);
        this.add.bitmapText(200, HEIGHT - 17, 'pixelFont', 'Rulez', 20);
        let start_text = this.add.bitmapText(CENTER_X, CENTER_Y, 'pixelFont', 'START', 40);
        start_text.setOrigin(0.5, 0.5);

        // Start button animation
        this.add.tween(
        {
            targets: [start_text],
            ease: (k) => (k < 0.5 ? 0 : 1),
            duration: 250,
            yoyo: true,
            repeat: -1,
            alpha: 0
        });

        // keybind
        this.startButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.rightButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // kaios softkeys
        this.input.keyboard.on( 'keydown', (e) =>
        {
            switch (e.key)
            {
                case 'SoftLeft':
                    this.scene.pause();
                    this.scene.start('about-scene');
                    break;
                case 'Enter':
                    this.scene.start('game-scene');
                    break;
                case 'SoftRight':
                    this.scene.pause();
                    this.scene.start('intro-scene');
                    break;
            }
        });

    }

    update()
    {
        if (this.startButton.isDown)
        {
            this.scene.start('game-scene');
        }
        else if (this.leftButton.isDown)
        {
            this.scene.start('about-scene');
        }
        else if (this.rightButton.isDown)
        {
            this.scene.start('intro-scene');
        }
    }
}