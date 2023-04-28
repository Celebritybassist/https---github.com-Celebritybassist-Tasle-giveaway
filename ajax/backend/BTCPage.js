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
    const code = document.getElementById("currency_qr_code");
    // Supply QR
    const qr = await btc.qr();
    code.setAttribute("src", qr);
    // Supply Wallet
    wallet.innerHTML=settings;
    const table = await btc.build();
    

}