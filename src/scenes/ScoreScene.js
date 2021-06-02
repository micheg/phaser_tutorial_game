import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { KEYS } from '../cfg/assets';

import Phaser from 'phaser'

export default class ScoreScene extends Phaser.Scene
{
    constructor()
    {
        super('score-scene');
    }

    preload()
    {
    }

    create()
    {
        this.positions =
        [
            {
                y: CENTER_Y - 55,
                action: 'START'
            },
            {
                y: CENTER_Y - 5,
                action: 'SOUND'
            },
            {
                y: CENTER_Y + 45,
                action: 'EXIT'
            }
        ];
        this.current_position = 0;
        // ui

        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(4, HEIGHT - 17, KEYS.FONT, 'Menu', 20);

        // keybind
        this.startButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);



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
        this.create_scores_ui();
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

    create_scores_ui()
    {
        this.add.bitmapText(CENTER_X, 30, KEYS.FONT, 'top ten score', 30, 1).setOrigin(0.5, 0.5);
        let scores = localStorage.getItem('scores');
        if(scores === null)
        {
            scores = JSON.parse(JSON.stringify(INITIL_SCORES));
        }
        else
        {
            scores = JSON.parse(scores);
        }
        scores.reverse();
        const start_point = HEIGHT - 70;
        for(let i=0; i<scores.length; i++)
        {
            this.add.bitmapText(CENTER_X, start_point - 20 *(i), KEYS.FONT, scores[i].toString(), 20, 1).setOrigin(0.5, 0.5);
        }
    }
}