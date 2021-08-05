const store = require('./../store')

const onSignUpSuccess = function (response) {
  // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up-header').hide()
  $('#sign-up').hide()
}

const onSignInSuccess = function (response) {
  store.user = response.user // this stores the data created for user in our store file
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-out-header').show()
  $('#sign-out').show()
  $('#sign-in-header').hide()
  $('#sign-in').hide()
  $('#sign-up-header').hide()
  $('#sign-up').hide()
}

const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-out-header').hide()
  $('#sign-out').hide()
  $('#sign-in-header').show()
  $('#sign-in').show()
  $('#sign-up-header').show()
  $('#sign-up').show()
}

const onFailure = function () {
  // this gives our user a fail message
  $('#message').text('Whoops! There was an error!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  // onNewGameSuccess,
  // onPlayerOneSuccess,
  onFailure
}
