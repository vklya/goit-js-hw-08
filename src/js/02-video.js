import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(VIDEO_TIME_KEY, JSON.stringify(e.seconds));
}

setCurrentTime();

function setCurrentTime() {
    const getTime= localStorage.getItem(VIDEO_TIME_KEY);
    if (!getTime) {
        return;
    }
    player.setCurrentTime(getTime);
}
