const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  // signUp is using ajax to communicate with the API and access the 'object' we created with our getFormFields
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createBeer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/beers',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const beerIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/beers',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateBeer = function (id, data) {
  // needs to get beers id somehow
  // need to change object to { beers: { beer: } }?
  return $.ajax({
    url: config.apiUrl + '/beers/' + id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteBeer = function (id) {
  return $.ajax({
    url: config.apiUrl + '/beers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createBeer,
  beerIndex,
  updateBeer,
  deleteBeer
}
