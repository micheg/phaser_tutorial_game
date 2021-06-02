import { INITIL_SCORES } from '../cfg/cfg';
let module = {};

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
    return (audio === 'on');
};

export default module;