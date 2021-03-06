const store = require('./../store')

const onSignUpSuccess = function (response) {
  // this gives our user a success message
  $('#message').text(`Thanks for signing up, ${response.user.email}!`)
  $('#sign-up').trigger('reset')
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
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#create-beer').trigger('reset')
  $('#update-beer').trigger('reset')
  $('#delete-beer').trigger('reset')
}

const onFailure = function () {
  // this gives our user a fail message
  $('#message').text('Whoops! There was an error!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#create-beer').trigger('reset')
  $('#delete-beer').trigger('reset')
}

const onUpdateBeerFailure = function () {
  // this gives our user a fail message
  $('#message').text('You can only update beers you own.')
  $('#update-beer').trigger('reset')
}

const onCreateBeerSuccess = function () {
  $('#message').text('Beer added successfully!')
  $('#create-beer').trigger('reset')
}

const onBeerIndexSuccess = function (response) {
  // $('#beer-list').toggle()
  $('#message').text('Mmmmmmmm...beers....')
  // taken from jquery-ajax-crud in trainings
  const beers = response.beers
  store.userBeers = [] // empty array to store user specific beers
  beers.forEach((beer) => { // checking each beer from proper id
    if (beer.owner === store.user._id) {
      store.userBeers.push(beer) // adding it to array
    }
  })
  let beerListHtml = ''
  store.userBeers.forEach((beer) => {
    beerListHtml += `
    <li>Name: ${beer.Name}</li>
    <li>Brewery: ${beer.Brewery}</li>
    <li>Type: ${beer.Type}</li>
    <li>Rating: ${beer.Rating}</li>
    <li>Description: ${beer.Description}</li>
    <li>Image: <a href=${beer.Image}>Let's have a look!</a></li>
    <li>ID #: ${beer._id}<li><br/>`
  })
  $('#beer-list').html(
    `<h1>Check 'em out:</h1> ${beerListHtml}`
  )
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
