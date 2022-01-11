import { Selector, t } from "testcafe"

class PayBillsPage {
    constructor() {
        //Selectors
        this.addNewPayTab = Selector('a').withText('Add New Payee')
        this.formName = Selector('#np_new_payee_name')
        this.formAddress = Selector('#np_new_payee_address')
        this.formAccount = Selector('#np_new_payee_account')
        this.formDetails = Selector('#np_new_payee_details')
        this.formSubmitButton = Selector('#add_new_payee')
        this.message = Selector('#alert_content')

    }
    
    async fillNewPayee(name, address, account, details) {
        await t
        .typeText(this.formName, name, { paste: true, replace: true }) 
        .typeText(this.formAddress, address, { paste: true, replace: true })
        .typeText(this.formAccount, account, { paste: true, replace: true })
        .typeText(this.formDetails, details, { paste: true, replace: true })
        .click(this.formSubmitButton)
      }
}

export default PayBillsPage