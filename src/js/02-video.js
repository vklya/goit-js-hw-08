import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({time}) {
    localStorage.setItem(VIDEO_TIME_KEY, time);
}

setCurrentTime();

function setCurrentTime () {
    if (!localStorage.getItem(VIDEO_TIME_KEY)) {
        return;
    }
    player.setCurrentTime(localStorage.getItem(VIDEO_TIME_KEY));
}
