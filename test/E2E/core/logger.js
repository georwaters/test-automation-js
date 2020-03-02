/* eslint-disable no-console */
const info = message => {
  console.info(message)
}

module.exports = {
  info,
  logTestName: testName => {
    info(`=====================  Feature name: '${testName}' =====================`)
  },

  logTestEnd: test => {
    if (test.passed) {
      info(`***** Test case: '${test.title}' passed! *****`)
    } else {
      browser.takeScreenshot()
      info(`>>>>>>>> TEST FAILED <<<<<<<<`)
    }
  },
  logStep: stepName => {
    info(`--------==[ [Step]: ${stepName} ]==--------`)
  },
}
