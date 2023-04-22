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
    console.table(settings);
    const wallet = document.getElementById("wallet");

    wallet.innerHTML=settings;
    const table = await eth.build();
    

}
