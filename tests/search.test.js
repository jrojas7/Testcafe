import NavBar from "../page-objects/components/NavBar"
import SearchResultsPage from "../page-objects/pages/SearchResultsPage"

const navBar = new NavBar()
const searchResultsPage = new SearchResultsPage()

//prettier-ignore
fixture `Search box test`
.page `http://zero.webappsecurity.com/index.html`

test("User can search for information using search box", async (t) => {
  // Actions
  navBar.search("online bank")

  // Assertions
  await t.expect(searchResultsPage.resultsTitle.exists).ok()
  await t.expect(navBar.searchBox.exists).ok()
  await t
    .expect(searchResultsPage.linkText.innerText)
    .contains("Zero - Free Access to Online Banking")
})
