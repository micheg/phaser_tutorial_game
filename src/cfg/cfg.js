import Phaser from 'phaser';

export const WIDTH = 240;
export const HEIGHT = 320;

// All configuration
export default
{
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 100 }
        }
    }
};


export const CENTER_X = WIDTH / 2;
export const CENTER_Y = HEIGHT / 2;