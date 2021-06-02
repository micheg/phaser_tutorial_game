import { WIDTH, HEIGHT, CENTER_X, CENTER_Y, PLAYER } from '../cfg/cfg';
import { KEYS } from '../cfg/assets';
import Phaser from 'phaser';
import GenericLabel from '../ui/GenericLabel';

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene');
        this.player = undefined;
        this.cursors = undefined;
        this.scoreLabel = undefined;
    }

    preload()
    {
    }

    create()
    {
        // debug 
        window.$P = this;
        // ui
        this.create_background();
        this.create_kaios_menu();
        this.create_kaios_keys();

        // game actors
        const platforms = this.create_platforms();
        this.player = this.create_player();
        const stars = this.create_stars();

        // score label
        [this.label_score, this.label_level] = this.create_labels(0, 1);

        // collision with platform
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(this.player, platforms);
        // collision with collectable
        this.physics.add.overlap(this.player, stars, this.collect_star, null, this);

        // input
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create_background()
    {
        this.add.image(CENTER_X, CENTER_Y, KEYS.SKY);
    }

    create_platforms()
    {
        const platforms = this.physics.add.staticGroup();
        // bottom platform
        platforms.create(CENTER_X, HEIGHT - 30, KEYS.GROUND);
        // left platforms
        platforms.create(-60, 80, KEYS.GROUND);
        platforms.create(0, 210, KEYS.GROUND);
        // right platform
        platforms.create(280, 140, KEYS.GROUND);
        return platforms;
    }

    create_kaios_menu()
    {
        // top header
        this.add.rectangle(120, 10, 240, 20, 0x000000, 1);
        this.add.rectangle(CENTER_X, HEIGHT - 10, WIDTH, 20, 0x000000, 1);
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

    create_kaios_keys()
    {
        this.kaios_keyboard = {};
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT);
        this.kaios_keyboard.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.kaios_keyboard.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.kaios_keyboard.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    }

    create_player()
    {
        const player = this.physics.add.sprite(100, 100, KEYS.DUDE)
        player.setBounce(0.2)
        player.setCollideWorldBounds(true)

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
        return player;
    }

    create_stars()
    {
        const stars = this.physics.add.group(
        {
            key: KEYS.RED_STAR,
            repeat: 8,
            setXY: { x: 12, y: 0, stepX: 30 }
        });
        
        stars.children.iterate((child) =>
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        return stars;
    }

    collect_star(player, star)
    {
        star.disableBody(true, true);
        this.label_score.add(10);
    }

    uodate_keybind()
    {
        if (this.leftButton.isDown)
        {
            this.scene.pause();
            this.scene.start('start-scene');
        }
    }

    update_keycontrols()
    {
        if (this.keyA.isDown)
        {
            console.log('A');
        }
        if (this.keyD.isDown)
        {
            console.log('D');
        }
        if (this.cursors.left.isDown || this.kaios_keyboard.left.isDown)
        {
            this.player.setVelocityX(-PLAYER.SPEED.x);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown || this.kaios_keyboard.right.isDown)
        {
            this.player.setVelocityX(PLAYER.SPEED.x);
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        //if (this.cursors.up.isDown && this.player.body.touching.down)
        if(
            (this.cursors.up.isDown && this.player.body.onFloor()) ||
            (this.kaios_keyboard.up.isDown && this.player.body.onFloor())
          )
        {
            this.player.setVelocityY(-PLAYER.SPEED.y);
        }
    }

    create_labels(initial_value, initial_level)
    {
        const formatScore = (score) => `Score: ${score}`;
        const score_label = new GenericLabel(this, 5, 5, initial_value, formatScore);
        this.add.existing(score_label);

        const format_level = (level) => `Level: ${level}`;
        const level_label = new GenericLabel(this, 170, 5, initial_level, format_level);
        this.add.existing(level_label);

        return [score_label, level_label];
    }

    update()
    {
        this.uodate_keybind();
        this.update_keycontrols();
    }
}