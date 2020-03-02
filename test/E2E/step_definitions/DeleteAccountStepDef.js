import { DeleteAccountPage } from '../pageObjects'
import { Then } from 'cucumber'
import { openPath } from '../core/browser'

const simpleUser = require('../helpers/data/user-data.json')

Then(/^I go to delete my account page$/, () => {
  openPath("/account/settings/delete")
})

Then(/^I delete my account$/, () => {
  DeleteAccountPage.deleteAccount(simpleUser.data.password);
})
