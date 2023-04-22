const BasePage = import("./BasePage");

class BTCPage extends BasePage;
{
    constructor(){
        this.currency = "BTC";
    }

}



console.log(new BTCPage().currency);