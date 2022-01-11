import { Selector, t } from "testcafe"

class ContentPage {
    constructor() {
        //Selectors
        this.accountSummaryTab = Selector('#account_summary_tab')
        this.payBillsTab = Selector('#pay_bills_tab')
    }
}

export default ContentPage