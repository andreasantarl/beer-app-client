'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const apiBeers = require('../beers/api_beers.js');
const uiBeers = require('../beers/ui_beers.js');
//const app = require('./../app');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .then(ui.success)
  .catch(error => console.error(error));
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then(ui.signInSuccess)
  .then(api.getUserProfileId)
  .then(ui.getUserProfileIdSuccess)
  .then(apiBeers.showUserBeers)
  .then(uiBeers.showUserBeersSuccess)
  .catch(error => console.error(error));
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(error => console.error(error));
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(error => console.error(error));
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
