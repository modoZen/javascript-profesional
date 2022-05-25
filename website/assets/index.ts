import MediaPlayer from '@zenaku06/mediaplayer'
import AutoPlay from '@zenaku06/mediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@zenaku06/mediaplayer/lib/plugins/AutoPause';
import Ads from '@zenaku06/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const buttonPlay:HTMLElement = document.querySelector('#playPause');
const buttonMute:HTMLElement = document.querySelector('#unmuteMute');

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay(), new AutoPause(), new Ads()
]});

buttonPlay.onclick = ()=> player.togglePlay();

buttonMute.onclick = ()=> player.toggleMute()

if( 'serviceWorker' in navigator){
    console.info('habemus serviceWorker')
    navigator.serviceWorker.register('/sw.js').catch(err=>{
        console.error(err.message);
    })
}