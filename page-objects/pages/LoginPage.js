import { Selector, t } from "testcafe"

class LoginPage {
  constructor() {
    // Selectors
    this.loginForm = Selector("#login_form")
    this.usernameInput = Selector("#user_login")
    this.usernamePasswordInput = Selector("#user_password")
    this.submitButton = Selector('input[value="Sign in"]')
    this.errorMessage = Selector('.alert-error')
    this.forgottenPasswordLink = Selector('a').withText('Forgot your password ?')
  }

  async loginToApp(username, password) {
    await t
    .typeText(this.usernameInput, username, { paste: true, replace: true }) 
    .typeText(this.usernamePasswordInput, password, { paste: true, replace: true })
    .click(this.submitButton)
  }
}

export default LoginPage
