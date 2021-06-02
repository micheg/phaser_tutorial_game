import Phaser from 'phaser'
import { IMG } from '../cfg/assets';
import { WIDTH, HEIGHT, CENTER_X, CENTER_Y, PLAYER } from '../cfg/cfg';

export default class BombSpawner
{
    constructor(scene, bombKey = IMG.BOMB)
    {
        this.scene = scene
        this.key = bombKey
        this._group = this.scene.physics.add.group()
    }

    get group()
    {
        return this._group;
    }

    spawn(playerX = 0)
    {
        const MIDDLE = WIDTH / 2;
        const x = (playerX < MIDDLE) ? Phaser.Math.Between(MIDDLE, WIDTH) : Phaser.Math.Between(0, MIDDLE);

        const bomb = this.group.create(x, -10, this.key)
        bomb.setBounce(1)
        bomb.setCollideWorldBounds(true)
        bomb.setVelocity(Phaser.Math.Between(-100, 100), 20)
        
        return bomb
    }
}