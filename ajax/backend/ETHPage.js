import BasePage from "./BasePage.js";

class ETHPage extends BasePage
{
    constructor(){
        super()
        this.currency = "ETH";
    }

}

const eth = new ETHPage();

window.onload = async ()=>{
    const settings = await eth.wallet("ETH");
    const wallet = document.getElementById("wallet");
    const code = document.getElementById("currency_qr_code");
    // Supply QR
    const qr = await eth.qr();
    code.setAttribute("src", qr);
    // Supply wallet
    wallet.innerHTML=settings;
    const table = await eth.build();
    

}
