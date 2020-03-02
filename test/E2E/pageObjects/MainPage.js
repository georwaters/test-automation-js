import { Page } from './Page'
import { Button, TextField, Element } from '../core/ui'

const pageTitleText = new TextField("//h1","Page title text")
const navigationDiv = new Element("//div[@role='navigation']", "")

export class MainPage extends Page {
  
  getTitleText = () => pageTitleText.getText()
  waitForNavigationDivToBeVisible = () => navigationDiv.waitUntilVisible();

}