import { Page } from './Page'
import { TextField, Element } from '../core/ui'

const pageTitleText = new TextField("//h1","Page title text")
const navigationDiv = new Element("//div[@role='navigation']", "Navigation div on the bottom of the page")

export class MainPage extends Page {
  
  getTitleText = () => pageTitleText.getText()
  waitForMainPageElementToLoad = () => navigationDiv.waitUntilVisible();

}