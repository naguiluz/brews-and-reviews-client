
const showAndHide = (showMe) => {
  $('#sign-out').hide()
  $('#sign-out-header').hide()
  $('#change-password').hide()
  $('#change-password-header').hide()
  $('#create-beer-header').hide()
  $('#create-beer').hide()
  $('#beer-index-header').hide()
  $('#beer-index').hide()
  $('#update-beer-header').hide()
  $('#update-beer').hide()
  $('#delete-beer-header').hide()
  $('#delete-beer').hide()
  showMe.showAndHide()
}

module.exports = {
  showAndHide
}
