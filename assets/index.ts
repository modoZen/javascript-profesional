import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause';
import { AdsPlugin } from './plugins/Ads';

const video = document.querySelector('video');
const buttonPlay:HTMLElement = document.querySelector('#playPause');
const buttonMute:HTMLElement = document.querySelector('#unmuteMute');

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay(), new AutoPause(), new AdsPlugin()
]});

buttonPlay.onclick = ()=> player.togglePlay();

buttonMute.onclick = ()=> player.toggleMute()

if( 'serviceWorker' in navigator){
    console.info('habemus serviceWorker')
    navigator.serviceWorker.register('/sw.js').catch(err=>{
        console.error(err.message);
    })
}