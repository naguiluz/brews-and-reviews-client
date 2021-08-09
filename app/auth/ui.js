const store = require('./../store')

const onSignUpSuccess = function (response) {
  // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  // $('#sign-up-header').hide()
  // $('#sign-up').hide()
}

const onSignInSuccess = function (response) {
  store.user = response.user // this stores the data created for user in our store file
  $('#message').text(`Welcome back, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#beer-index-button').show()
  $('#create-beer-button').show()
  $('#update-beer-button').show()
  $('#delete-beer-header').show()
  $('#delete-beer-button').show()
  $('#sign-in-div').hide()
  $('#sign-in-button').hide()
  $('#sign-up-div').hide()
  $('#sign-up-button').hide()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password Changed!')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('Come back soon!')
  $('#beer-index-button').hide()
  $('#create-beer-div').hide()
  $('#create-beer-button').hide()
  $('#sign-out-div').hide()
  $('#sign-out-button').hide()
  $('#change-password-div').hide()
  $('#change-password-button').hide()
  $('#update-beer-div').hide()
  $('#update-beer-button').hide()
  $('#delete-beer-div').hide()
  $('#delete-beer-button').hide()
  $('#beer-list').hide()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
}

const onFailure = function () {
  // this gives our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onUpdateBeerFailure = function () {
  // this gives our user a fail message
  $('#message').text('You can only update beers you own.')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onCreateBeerSuccess = function () {
  $('#message').text('Beer added successfully!')
  $('#create-beer').trigger('reset')
}

const onBeerIndexSuccess = function (response) {
  $('#message').text('Mmmmmmmm...beers....')
  // taken from jquery-ajax-crud in trainings
  const beers = response.beers
  let beerListHtml = ''
  beers.forEach((beer) => {
    beerListHtml += `
    <li>Name: ${beer.Name}</li>
    <li>Brewery: ${beer.Brewery}</li>
    <li>Type: ${beer.Type}</li>
    <li>Rating: ${beer.Rating}</li>
    <li>Description: ${beer.Description}</li>
    <li>User: ${beer.owner}</li>
    <li>ID #: ${beer._id}<li>`
  })
  $('#beer-list').show()
  $('#beer-list').html(`Check 'em out: ${beerListHtml}`)
}

const onUpdateBeerSuccess = function () {
  $('#message').text('Beer updated successfully!')
  $('#update-beer').trigger('reset')
}

const onDeleteBeerSuccess = function () {
  $('#message').text('Beer deleted successfully!')
  $('#delete-beer').trigger('reset')
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateBeerSuccess,
  onBeerIndexSuccess,
  onUpdateBeerSuccess,
  onFailure,
  onUpdateBeerFailure,
  onDeleteBeerSuccess
}
