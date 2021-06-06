import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { IMG } from '../cfg/assets';
import Utils from '../utils/utils';
import Phaser from 'phaser'

export default class AboutScene extends Phaser.Scene
{
    constructor()
    {
        super('intro-scene')
    }

    create()
    {
        // msg 
        const msg1 = 'Use the cursor keys or 4/2/6/8';
        const msg2 = 'to move the player, get the'
        const msg3 = 'stars and avoid the bombs';
        // ui
        Utils.make_simple_title(this, 'instructions');
        Utils.make_scene_text(this, [msg1, msg2, msg3]);
        // keybind
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

        // kaios softkeys
        Utils.make_bottom_bar(this,
        {
            left_text: 'Menu',
            left_scene: 'start-scene',
            bottom_bar: true
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