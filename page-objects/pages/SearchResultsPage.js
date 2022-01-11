import { Selector, t } from "testcafe"

class SearchResultsPage {
    constructor() {
        // Selectors
        this.resultsTitle = Selector('h2')
        this.linkText = Selector('div')
    }
}

export default SearchResultsPage