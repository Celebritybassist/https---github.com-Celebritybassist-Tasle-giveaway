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
    console.table(settings);
    const wallet = document.getElementById("wallet");

    wallet.innerHTML=settings;
    const table = await eth.build();

}