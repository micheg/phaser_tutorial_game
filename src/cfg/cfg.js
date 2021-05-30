import Phaser from 'phaser';

export const WIDTH = 240;
export const HEIGHT = 320;

// All configuration
export default
{
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 200 }
        }
    },
    pixelArt: false
};


export const CENTER_X = WIDTH / 2;
export const CENTER_Y = HEIGHT / 2;