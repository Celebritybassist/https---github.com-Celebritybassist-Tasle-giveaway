import BasePage from "./BasePage.js";

class BTCPage extends BasePage
{
    constructor(){
        super()
        this.currency = "BTC";
        
    }

}

const btc = new BTCPage();

window.onload = async ()=>{
    const settings = await btc.wallet("BTC");
    const wallet = document.getElementById("wallet");

    wallet.innerHTML=settings;
    const table = await btc.build();
    

}