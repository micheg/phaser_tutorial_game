import Phaser from 'phaser'

let config =
{
    type: Phaser.AUTO,
    width: 240,
    height: 320,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 100 }
        }
    },
    scene:
    {
        preload: preload,
        create: create
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', './img/space.png');
    this.load.image('logo', './img/logo.png');
    this.load.image('red', './img/red.png');
}

function create ()
{
    this.add.image(120, 160, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(160, 80, 'logo');

    logo.setVelocity(100, 100);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}
