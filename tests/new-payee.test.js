import { login } from "../helper"
import ContentPage from "../page-objects/pages/ContentPage"
import PayBillsPage from "../page-objects/pages/PayBillsPage"

const contentPage = new ContentPage()
const payBillsPage = new PayBillsPage()

// prettier-ignore
fixture `New payee test`
.page `http://zero.webappsecurity.com/index.html`

test.before(async t => {
    // function login from helper
    await login('username', 'password')
})


('User can add a new payee to the list', async t => {
    // Actions
    await t.click(contentPage.payBillsTab)
    await t.click(payBillsPage.addNewPayTab)
    payBillsPage.fillNewPayee('Bryan Adams', 'Boulevard #123', 'Account 1', 'This is a new account')

    // Assertions
    await t.expect(payBillsPage.message.innerText).contains('successfully created.') //you can write less text also
})