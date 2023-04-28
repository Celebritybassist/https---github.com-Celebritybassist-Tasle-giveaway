import BasePage from "./BasePage.js";

class DogePage extends BasePage
{
    constructor(){
        super()
        this.currency = "Doge";
    }

}

const doge = new DogePage();

window.onload = async ()=>{
    const settings = await doge.wallet("Doge");
    const wallet = document.getElementById("wallet");
    const code = document.getElementById("currency_qr_code");
    // supply QR
    const qr = await doge.qr();
    code.setAttribute("src", qr);
    // Supply wallet
    wallet.innerHTML=settings;
    const table = await doge.build();

}