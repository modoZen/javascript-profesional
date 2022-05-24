interface ConfigParam{
    el:HTMLMediaElement;
    plugins?: any[]
}

class MediaPlayer {
    media: HTMLMediaElement
    plugins:any[]
    constructor(config:ConfigParam) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    mute() {
        this.media.muted = true;
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}








// class MediaPlayer{
//   constructor(config){
//     this.media = config.el
//   }

//   play(){
//     this.media.play()
//   }
//   pause(){
//     this.media.pause();
//   }
//   togglePlay(){
//     this.media.paused?this.play():this.pause();
//   }
// }

export default MediaPlayer