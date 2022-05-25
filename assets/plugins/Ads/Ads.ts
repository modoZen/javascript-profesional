import { ALL_ADS } from "./AdsJson";

export interface Ad{
    imageUrl:string;
    title:string;
    body:string;
    url:string;
}

export class Ads{
    private static instance:Ads;
    private constructor(){
        this.initAds();
    }
    private ads: Ad[]
    static getInstance(){
        Ads.instance = Ads.instance || new Ads()
        return Ads.instance;
    }

    private initAds(){
        this.ads = [...ALL_ADS];
    }

    getAd(){
        if(this.ads.length===0) this.initAds();
        return this.ads.pop();
    }
}