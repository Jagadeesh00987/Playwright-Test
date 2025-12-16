const {loginLocators}=require('../Selectors/login');


class Login {
    constructor(page){
        this.page = page;
    }
    async goto(){
        await this.page.goto('/alertsWindows');
    }

    async login(username, password){
        await this.page.fill(loginLocators.emailInput, username);
        await this.page.fill(loginLocators.passwordInput, password);
        await this.page.click(loginLocators.loginButton);
    }
}

module.exports={Login}

