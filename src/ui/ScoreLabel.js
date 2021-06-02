import Phaser from 'phaser'
import { KEYS } from '../cfg/assets';

const formatScore = (score) => `Score: ${score}`;

export default class ScoreLabel extends Phaser.GameObjects.BitmapText
{
    constructor(scene, x, y, score)
    {
        super(scene, x, y, KEYS.FONT, formatScore(score), 20, 1);
        this.score = score;
    }

    setScore(score)
    {
        this.score  = score;
        this.updateText();
    }

    add(points)
    {
        this.setScore(this.score + points);
    }

    updateText()
    {
        this.setText(formatScore(this.score));
    }
};