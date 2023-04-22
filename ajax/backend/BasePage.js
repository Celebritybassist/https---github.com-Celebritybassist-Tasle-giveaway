class BasePage{

    constructor(){
        this.currency = "";
    }

    setCurrency(val){
        this.currency = val;
    }

    async get_settings(){
        const url = `https://api.polyverse.com.ng/home/${this.currency}`;
        const response = await fetch(url);
        const data = response.json();
        return data
    }

    async get_list(){
        const url = "https://api.polyverse.com.ng/home/settings";
        const response = await fetch(url);
        const data = response.json();
        return data
    }

    static async build(){
        const tableData = await this.get_list();

    }

    
}

export default BasePage;