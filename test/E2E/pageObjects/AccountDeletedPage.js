import { Page } from './Page'
import { Element } from '../core/ui'

const pageTitle = new Element("//h1","");

export class AccountDeletedPage extends Page {
  getPageTitle = () => pageTitle.getText()
}