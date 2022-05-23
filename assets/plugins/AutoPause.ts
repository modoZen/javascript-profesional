import MediaPlayer from "../MediaPlayer";

class AutoPause{
    player: MediaPlayer;
    constructor(){
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    run(player: MediaPlayer){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: 0.25
        })
        observer.observe(player.media);
        document.addEventListener('visibilitychange', this.handlerVisibilityChange)
    }
    private handlerIntersection(entries: IntersectionObserverEntry[]){
        let entry = entries[0];
        if(entry.isIntersecting) this.player.play();
        else this.player.pause();
    }
    private handlerVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';
        isVisible?this.player.play():this.player.pause()
    }
}

export default AutoPause;

// class AutoPause{
//     run(player){
//         this.player = player;
//         const observer = new IntersectionObserver(this.handlerIntersection(), {
//             threshold: 0.25
//         })

//         observer.observe(player.media);
//     }

//     handlerIntersection(){
//         return (entries)=>{
//             console.log(entries[0].isIntersecting)
//             let entry = entries[0];
//             if(entry.isIntersecting) this.player.play();
//             else this.player.pause();
//         } 
//     }
// }

// export default AutoPause;