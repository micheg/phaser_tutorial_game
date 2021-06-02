import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import Phaser from 'phaser'
import { IMG } from '../cfg/assets';

export default class AboutScene extends Phaser.Scene
{
    constructor()
    {
        super('about-scene')
    }

    create()
    {
        // msg 
        const msg1 = 'This little game is an adaptation';
        const msg2 = 'of the official website tutorial'
        const msg3 = 'for KaiOS devices';
        // ui
        this.add.image(CENTER_X, CENTER_Y, IMG.SKY);
        this.add.image(CENTER_X, 50, IMG.STAR);
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(200, HEIGHT - 17, IMG.FONT, 'Menu', 20);
        let about_text = this.add.bitmapText(CENTER_X, 100, IMG.FONT, 'ABOUT', 40);
        about_text.setOrigin(0.5, 0.5);

        [msg1, msg2, msg3].forEach((txt, idx) =>
        {
            let tmp = this.add.bitmapText(CENTER_X, CENTER_Y + 20*idx, IMG.FONT, txt, 20);
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
        this.rightButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // kaios softkeys
        this.input.keyboard.on( 'keydown', (e) =>
        {
            switch (e.key)
            {
                case 'SoftLeft':
                    break;
                case 'Enter':
                    break;
                case 'SoftRight':
                    this.scene.pause();
                    this.scene.start('start-scene');
                    break;
            }
        });
    }

    update()
    {
        if (this.rightButton.isDown)
        {
            this.scene.start('start-scene');
        }
    }
}