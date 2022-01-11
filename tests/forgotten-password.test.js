import Navbar from "../page-objects/components/NavBar"
import LoginPage from "../page-objects/pages/LoginPage"
import ForgottenPasswordPage from "../page-objects/pages/ForgottenPasswordPage"

const navBar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

// prettier ignore
fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/index.html`

test('User can request new password to be send to his email', async t =>{
    //Actions
    await t.click(navBar.signInButton)
    await t.click(loginPage.forgottenPasswordLink)
    await t.typeText(forgottenPasswordPage.emailInput, 'sylvesterstallone@mail.com', {paste: true, replace: true})
    // to click the Enter key
    await t.pressKey('enter')

    //Assertions
    await t.expect(forgottenPasswordPage.message.innerText).contains('sylvesterstallone@mail.com')
    await t.expect(forgottenPasswordPage.emailInput.exists).notOk()

})