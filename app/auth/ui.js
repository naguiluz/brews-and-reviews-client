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
  $('#create-beer-header').show()
  $('#create-beer').show()
  $('#beer-index-header').show()
  $('#beer-index').show()
  $('#update-beer-header').show()
  $('#update-beer').show()
  $('#delete-beer-header').show()
  $('#delete-beer').show()
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
  console.log(beers)
  beers.forEach((beer) => {
    beerListHtml += `
    <li>${beer.Name}</li>
    <li>${beer.Brewery}</li>
    <li>${beer.Type}</li>
    <li>${beer.Rating}</li>
    <li>${beer.Description}</li>
    <p>${beer._id}</p>`
  })
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
