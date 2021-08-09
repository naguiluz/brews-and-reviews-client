// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const displayFunctions = require('./styles/display-functions')
$(() => {
  // functions
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-beer').on('submit', authEvents.onCreateBeer)
  $('#beer-index-button').on('click', authEvents.onBeerIndex)
  $('#update-beer').on('submit', authEvents.onUpdateBeer)
  $('#delete-beer').on('submit', authEvents.onDeleteBeer)
  // show
  $('#sign-up-button').on('click', displayFunctions.signUp)
  $('#sign-in-button').on('click', displayFunctions.signIn)
  $('#change-password-button').on('click', displayFunctions.changePassword)
  $('#create-beer-button').on('click', displayFunctions.createBeer)
  $('#update-beer-button').on('click', displayFunctions.updateBeer)
  $('#delete-beer-button').on('click', displayFunctions.deleteBeer)
  // hide
  $('#sign-up-div').hide()
  $('#sign-in-div').hide()
  $('#change-password-div').hide()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#beer-index-button').hide()
  $('#create-beer-div').hide()
  $('#create-beer-button').hide()
  $('#update-beer-div').hide()
  $('#update-beer-button').hide()
  $('#delete-beer-div').hide()
  $('#delete-beer-button').hide()
})
