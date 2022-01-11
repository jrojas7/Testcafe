import { Selector, t } from "testcafe"

class ForgottenPasswordPage {
    constructor() {
        // Selectors
        this.emailInput = Selector('#user_email')
        this.message = Selector('div')
    }
}

export default ForgottenPasswordPage
