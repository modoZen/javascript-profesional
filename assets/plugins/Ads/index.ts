import MediaPlayer from "../../MediaPlayer";
import { Ad, Ads } from "./Ads";

export class AdsPlugin{
    private ads   :Ads
    private currentAd   :Ad
    private player:MediaPlayer
    private media :HTMLMediaElement
    constructor(){
        this.ads = Ads.getInstance();
        this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this);
    }
    run(player:MediaPlayer){
        this.player = player;
        this.media  = this.player.media;
        this.media.addEventListener('timeupdate',this.handlerTimeUpdate);
    }
    handlerTimeUpdate(){
        const currentTme = Math.floor(this.media.currentTime);
        if(currentTme % 30 === 0){
            this.renderAd();
        }
    }
    renderAd(){
        if(this.currentAd) return
        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(ad)
    }
}