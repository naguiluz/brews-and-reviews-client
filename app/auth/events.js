const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault() // prevent refresh
  const form = event.target // form variable(data being sent tp api) is the event of submitting our info
  const data = getFormFields(form) // data variable is the getFormFields translation of that data into a readable 'object' which is a json string
  api.signUp(data) // accesses the api file to run the signUp ajax function to communicate with api
    .then(ui.onSignUpSuccess) // then runs this function on successful execution with api
    .catch(ui.onFailure) // catch runs this function on failure
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onFailure)
}

const onSignOut = function () {
  // our sign out event does not take in any data so it does not need to use getFormFields, instead it will only access the api through ajax and our signOut function
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onBeerIndex = function () {
  api.beerIndex()
    .then(ui.onBeerIndexSuccess)
    .catch(ui.onFailure)
}

const onCreateBeer = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createBeer(data)
    .then(api.beerIndex) // this runs index before the create success
    .then(ui.onBeerIndexSuccess)
    .then(ui.onCreateBeerSuccess)
    .catch(ui.onFailure)
}

const onUpdateBeer = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const beerID = data.beers._id
  api.updateBeer(beerID, data)
    .then(api.beerIndex)
    .then(ui.onBeerIndexSuccess)
    .then(ui.onUpdateBeerSuccess)
    .catch(ui.onUpdateBeerFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateBeer,
  onBeerIndex,
  onUpdateBeer

}
