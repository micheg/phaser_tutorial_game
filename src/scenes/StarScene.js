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
        this.add.image(CENTER_X, CENTER_Y, 'sky');
        this.star1 = this.add.image(CENTER_X - 100, CENTER_Y - 55, 'star');
        this.star2 = this.add.image(CENTER_X + 100, CENTER_Y - 55, 'star');
        window.STAR1 = this.star1;
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(4, HEIGHT - 17, 'pixelFont', 'About', 20);
        this.add.bitmapText(200, HEIGHT - 17, 'pixelFont', 'Rulez', 20);
        let text_start = this.add.bitmapText(CENTER_X, CENTER_Y - 50, 'pixelFont', 'START', 40, 1);
        let text_config = this.add.bitmapText(CENTER_X, CENTER_Y, 'pixelFont', 'AUDIO ON', 40, 1);
        let text_exit = this.add.bitmapText(CENTER_X, CENTER_Y + 50, 'pixelFont', 'EXIT', 40, 1);
        text_start.setOrigin(0.5, 0.5);
        text_config.setOrigin(0.5, 0.5);
        text_exit.setOrigin(0.5, 0.5);
        this.text_config = text_config;

        // Start button animation
        /*this.add.tween(
        {
            targets: [start_text],
            ease: (k) => (k < 0.5 ? 0 : 1),
            duration: 250,
            yoyo: true,
            repeat: -1,
            alpha: 0
        });*/

        // keybind
        this.startButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.rightButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);


        //  Create our keyboard controls.
        this.cursors = this.input.keyboard.addKeys(
        {
            leftKey: Phaser.Input.Keyboard.KeyCodes.LEFT,
            rightKey: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            upKey: Phaser.Input.Keyboard.KeyCodes.UP,
            downKey: Phaser.Input.Keyboard.KeyCodes.DOWN
        });

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
                    //this.scene.start('game-scene');
                    this.parse_enter();
                    break;
                case 'SoftRight':
                    this.scene.pause();
                    this.scene.start('intro-scene');
                    break;
            }
        });

    }

    uodate_keybind()
    {
        if (this.startButton.isDown)
        {
            this.parse_enter();
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

    update_keypad()
    {
        const { upKey, downKey } = this.cursors;
        if (Phaser.Input.Keyboard.JustDown(upKey))
        {
            if(this.current_position == 0)
            {
                this.current_position = this.positions.length - 1;
                return;
            }
            else
            {
                this.current_position -= 1;
                return;
            }
        }
        else if (Phaser.Input.Keyboard.JustDown(downKey))
        {
            if(this.current_position == this.positions.length - 1)
            {
                this.current_position = 0;
                return;
            }
            else
            {
                this.current_position += 1;
                return;
            }
        }
    }
    update_ui_menu()
    {
        this.star1.y = this.positions[this.current_position].y;
        this.star2.y = this.positions[this.current_position].y;
    }

    parse_enter()
    {
        const action = this.positions[this.current_position].action;
        switch (action)
        {
            case 'START':
                this.scene.start('game-scene');
                break;
            case 'SOUND':
                console.log("SD");
                let text = this.text_config.text;
                setTimeout(() =>
                {
                    this.text_config.text = (text === 'AUDIO ON') ? 'AUDIO OFF': 'AUDIO ON';
                },100)
                
                if(text === 'AUDIO ON')
                window.TXT = this.text_config;
                console.log("text " + text);
                return -1;
                break;
            case 'EXIT':
                window.close();
                break;
        }
    }

    update()
    {
        this.uodate_keybind();
        this.update_keypad();
        this.update_ui_menu();
    }
}