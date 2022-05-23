import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#playPause');
const buttonMute = document.querySelector('#unmuteMute');

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay(), new AutoPause(),
]});

buttonPlay.onclick = ()=> player.togglePlay();

buttonMute.onclick = ()=> player.toggleMute()

if( 'serviceWorker' in navigator){
    console.info('habemus serviceWorker')
    navigator.serviceWorker.register('/sw.js').catch(err=>{
        console.error(err.message);
    })
}