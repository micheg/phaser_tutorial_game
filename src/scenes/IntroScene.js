import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import Phaser from 'phaser'

export default class AboutScene extends Phaser.Scene
{
    constructor()
    {
        super('intro-scene')
    }

    preload()
    {
    }

    create()
    {
        // msg 
        const msg1 = 'Use the cursor keys or 4/2/6/8';
        const msg2 = 'to move the player, get the'
        const msg3 = 'stars and avoid the bombs';
        // ui
        this.add.image(CENTER_X, CENTER_Y, 'sky');
        this.add.image(CENTER_X, 50, 'star');
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);

        this.add.bitmapText(4, HEIGHT - 17, 'pixelFont', 'Menu', 20);
        let about_text = this.add.bitmapText(CENTER_X, 100, 'pixelFont', 'INSTRUCTIONS', 40);
        about_text.setOrigin(0.5, 0.5);

        [msg1, msg2, msg3].forEach((txt, idx) =>
        {
            let tmp = this.add.bitmapText(CENTER_X, CENTER_Y + 20*idx, 'pixelFont', txt, 20);
            tmp.setOrigin(0.5, 0.5);
        });

        // Start button animation
        this.add.tween(
        {
            targets: [about_text],
            ease: (k) => (k < 0.5 ? 0 : 1),
            duration: 250,
            yoyo: true,
            repeat: -1,
            alpha: 0
        });

        // keybind
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

        // kaios softkeys
        this.input.keyboard.on( 'keydown', (e) =>
        {
            switch (e.key)
            {
                case 'SoftRight':
                    break;
                case 'Enter':
                    break;
                case 'SoftLeft':
                    this.scene.pause();
                    this.scene.start('start-scene');
                    break;
            }
        });

    }

    update()
    {
        if (this.leftButton.isDown)
        {
            this.scene.start('start-scene');
        }
    }
}