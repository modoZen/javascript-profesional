class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugin => {
            plugin.run(player);
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