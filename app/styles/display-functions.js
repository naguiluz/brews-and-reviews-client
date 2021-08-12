
const signUp = function () {
  $('#sign-up-div').toggle()
}

const signIn = function () {
  $('#sign-in-div').toggle()
}

const changePassword = function () {
  $('#change-password-div').toggle()
}

const indexBeer = function () {
  $('#beer-list').toggle()
}
const createBeer = function () {
  $('#create-beer-div').toggle()
}

const updateBeer = function () {
  $('#update-beer-div').toggle()
}

const deleteBeer = function () {
  $('#delete-beer-div').toggle()
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  createBeer,
  updateBeer,
  deleteBeer,
  indexBeer
}
