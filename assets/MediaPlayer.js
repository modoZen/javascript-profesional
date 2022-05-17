function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function () {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
    this.media.paused?this.play():this.pause();
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