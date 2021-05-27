import Phaser from 'phaser';

// All configuration
export default
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
    }
};