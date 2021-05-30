import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { KEYS } from '../cfg/assets';
import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene')
    }

    preload()
    {
    }

    create()
    {
        this.create_background();
        this.create_kaios_menu();
        this.createPlatforms();
        this.create_player();
    }

    create_background()
    {
        this.add.image(CENTER_X, CENTER_Y, KEYS.SKY);
    }

    createPlatforms()
    {
        const platforms = this.physics.add.staticGroup();
        // bottom platform
        platforms.create(CENTER_X, HEIGHT - 30, KEYS.GROUND);
        // left platforms
        platforms.create(-40, 80, KEYS.GROUND);
        platforms.create(0, 200, KEYS.GROUND);
        // right platform
        platforms.create(280, 140, KEYS.GROUND);
    }

    create_kaios_menu()
    {
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000);
        this.add.bitmapText(4, HEIGHT - 17, KEYS.FONT, 'Menu', 20);

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

    create_player()
    {
		this.player = this.physics.add.sprite(100, 100, KEYS.DUDE)
		this.player.setBounce(0.2)
		this.player.setCollideWorldBounds(true)

		this.anims.create(
        {
			key: 'left',
			frames: this.anims.generateFrameNumbers(KEYS.DUDE, { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});
		
		this.anims.create(
        {
			key: 'turn',
			frames: [ { key: KEYS.DUDE, frame: 4 } ],
			frameRate: 20
		});
		
		this.anims.create(
        {
			key: 'right',
			frames: this.anims.generateFrameNumbers(KEYS.DUDE, { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});
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