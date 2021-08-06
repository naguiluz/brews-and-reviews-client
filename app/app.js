// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').hide()
  $('#sign-out-header').hide()
  $('#change-password').hide()
  $('#change-password-header').hide()
  //
  //
  $('#create-beer-header').hide()
  $('#create-beer').hide()
  $('#create-beer').on('submit', authEvents.onCreateBeer)
  $('#beer-index-header').hide()
  $('#beer-index').hide()
  $('#beer-index').on('click', authEvents.onBeerIndex)
  $('#update-beer-header').hide()
  $('#update-beer').hide()
  $('#update-beer').on('submit', authEvents.onUpdateBeer)
})
