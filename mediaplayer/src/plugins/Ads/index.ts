import MediaPlayer from "../../MediaPlayer";
import { Ad, Ads } from "./Ads";

export class AdsPlugin{
    private ads   :Ads
    private currentAd   :Ad
    private player:MediaPlayer
    private media :HTMLMediaElement
    private adsContainer:HTMLElement
    constructor(){
        this.ads = Ads.getInstance();
        this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this);
        this.adsContainer = document.createElement('div')
    }
    run(player:MediaPlayer){
        this.player = player;
        this.media  = this.player.media;
        this.media.addEventListener('timeupdate',this.handlerTimeUpdate);
        this.player.container.appendChild(this.adsContainer)
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
        this.adsContainer.innerHTML = `
        <div class="ads">
            <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                <img class="ads__img" src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                <h5 class="ads__title">${this.currentAd.title}</h5>
                <p class="ads__body">${this.currentAd.body}</p>
                </div>
            </a>
        </div>`;
        setTimeout(()=>{
            this.currentAd = null;
            this.adsContainer.innerHTML ='';
        },10000);
    }
}