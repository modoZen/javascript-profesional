interface Observer{
    update:(data:any)=>void
}

interface Subject{
    subscribe:(observe:Observer)=>void;
    unsubscribe: (observe:Observer)=>void;
}

class BitcoinPrice implements Subject{
    private observers: Observer[] = []
    constructor(){
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input',()=>{
            this.notify(el.value)
        })
    }
    subscribe(observe: Observer) {
        this.observers.push(observe)
    }
    unsubscribe(observe: Observer) {
        const index = this.observers.findIndex(obs=>obs ===observe)
        this.observers.splice(index,1)
    };
    notify(data:any){
        this.observers.forEach(observer=>observer.update(data))
    }
}

class PriceDisplay implements Observer{
    private el: HTMLElement
    constructor(){
        this.el = document.querySelector("#price")
    }
    update (data:any){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

