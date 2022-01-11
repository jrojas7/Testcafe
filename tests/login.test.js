import LoginPage from "../page-objects/pages/LoginPage"
import Navbar from "../page-objects/components/NavBar"
import ContentPage from "../page-objects/pages/ContentPage"

const loginPage = new LoginPage()
const navBar = new Navbar()
const contentPage = new ContentPage()

//prettier-ignore
fixture `Login Test`
.page `http://zero.webappsecurity.com/index.html`

test("User cannot login with invalid credentials", async (t) => {
    // Actions
  await t.click(navBar.signInButton)
  loginPage.loginToApp("invalid username", "invalid password")

    // Assertions
  await t
    .expect(loginPage.errorMessage.innerText)
    .contains("Login and/or password are wrong.")
})

test("User can login into application", async (t) => {

    // Actions
  await t.click(navBar.signInButton)
  loginPage.loginToApp('username', 'password')

    // Assertions
  await t.expect(contentPage.accountSummaryTab.exists).ok()
  await t.expect(loginPage.loginForm.exists).notOk()

    // Actions
  await t.click(navBar.userIcon)
  await t.click(navBar.logoutButton)

    // Assertions
  await t.expect(navBar.logoutButton.exists).notOk()
  await t.expect(navBar.signInButton.exists).ok()
})
