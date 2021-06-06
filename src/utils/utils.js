import { INITIL_SCORES } from '../cfg/cfg';
import { WIDTH, HEIGHT, CENTER_X, CENTER_Y, PLAYER } from '../cfg/cfg';
import { IMG, SND } from '../cfg/assets';

let module = {};

module.isString = (value)  =>
{
    return typeof value === 'string' || value instanceof String;
}

module.scores_load = () =>
{
    let scores = localStorage.getItem('scores');
    if(scores === null)
    {
        scores = JSON.parse(JSON.stringify(INITIL_SCORES));
    }
    else
    {
        scores = JSON.parse(scores);
    }
    scores = scores.sort((a,b) =>  b-a);
    return scores;
};

module.scores_save = (data) =>
{
    localStorage.setItem('scores', JSON.stringify(data));
};

module.audio_is_on = () =>
{
    const audio = localStorage.getItem('audio');
    // first time
    if(audio === null)
    {
        localStorage.setItem('audio', 'on');
        return true;
    }
    return (audio === 'on');
};


module.make_bottom_hud = (scene, left=null, right=null) =>
{
    // bottom black rectangle 16*width
    let l=null, r=null;
    scene.add.rectangle(CENTER_X, HEIGHT - 8, WIDTH, 16, 0x000000, 1);
    if( left !== null && module.isString(left) )
    {
        l = scene.add.bitmapText(8, HEIGHT - 14, IMG.FONT, left, 16);
    }
    if( right !== null && module.isString(right) )
    {
        window.$R = right
        const len = right.length * 8;
        r = scene.add.bitmapText(WIDTH - len, HEIGHT - 14, IMG.FONT, right, 16);
    }
    return [l,r];
};

module.make_bottom_bar = (scene, obj_conf) =>
{
    const left = ('left_text' in obj_conf) ? obj_conf.left_text : null;
    const right = ('right_text' in obj_conf) ? obj_conf.right_text : null;
    const bar = ('bottom_bar' in obj_conf) ? obj_conf.bottom_bar : null;
    let l=null, r=null;
    [l,r] = module.make_bottom_hud(scene, left, right);

    if(bar !== null && bar)
    {
        scene.add.rectangle(CENTER_X, HEIGHT - 16, WIDTH, 2, 0xffffff);
    }
    scene.input.keyboard.on( 'keydown', (e) =>
    {
        switch (e.key)
        {
            case 'SoftLeft':
                if( 'left_scene' in obj_conf )
                {
                    scene.scene.pause();
                    scene.scene.start(obj_conf.left_scene);
                }
                break;
            case 'SoftRight':
                if( 'right_scene' in obj_conf )
                {
                    scene.scene.pause();
                    scene.scene.start(obj_conf.right_scene);
                }
                break;
        }
    });
    return [l,r];
};

module.make_simple_title = (scene, str) =>
{
    scene.add.image(CENTER_X, CENTER_Y, IMG.SKY);
    scene.add.image(CENTER_X, 50, IMG.STAR);
    let tmp = scene.add.bitmapText(CENTER_X, 100, IMG.FONT, str.toUpperCase(), 40).setOrigin(0.5, 0.5);

    scene.add.tween(
    {
        targets: [tmp],
        ease: (k) => (k < 0.5 ? 0 : 1),
        duration: 250,
        yoyo: true,
        repeat: -1,
        alpha: 0
    });
};

module.make_scene_text = (scene, arr_of_str) =>
{
    arr_of_str.forEach((txt, idx) =>
    {
        scene.add.bitmapText(CENTER_X, CENTER_Y + 20*idx, IMG.FONT, txt, 20)
            .setOrigin(0.5, 0.5);
    });
};

export default module;