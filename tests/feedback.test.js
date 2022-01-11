import FeedbackPage from "../page-objects/pages/FeedbackPage"
import Navbar from "../page-objects/components/NavBar"

const feedbackPage = new FeedbackPage()
const navBar = new Navbar()

//prettier-ignore
fixture `Feedback form test`
.page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async t =>{

    // Actions
    await t.click(navBar.linkToFeedback)
    feedbackPage.fillFeedbackPage('John Rambo', 'johnrambo@mail.com', 'This is a subject', 'My comment goes here')
    
    //Assertions
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments')

})