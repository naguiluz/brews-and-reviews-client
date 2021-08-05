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
  $('#change-password-header').show()
  $('#change-password').show()
  $('#sign-in-header').hide()
  $('#sign-in').hide()
  $('#sign-up-header').hide()
  $('#sign-up').hide()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password Changed!')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-out-header').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-header').hide()
  $('#sign-in-header').show()
  $('#sign-in').show()
  $('#sign-up-header').show()
  $('#sign-up').show()
}

const onFailure = function () {
  // this gives our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onFailure
}
