import { Page } from './Page'
import { Button, TextField, Element } from '../core/ui'
import { openPath } from '../core/browser'

const underButton = new Button("(//div[@class='buttons__wrapper']/a)[1]/span","Under 13")
const overButton = new Button("(//div[@class='buttons__wrapper']/a)[2]/span","13 or over")
const pageTitleText = new TextField("//legend[contains(@class,'heading')]/span","Page title text")

export class RegisterStartPage extends Page {
  
  goTo = () => openPath('/register')

  getTitleText = () => pageTitleText.getText()

  clickUserIsOverThirteen = () => overButton.click()

  clickUserIsUnderThirteen = () => underButton.click()

}