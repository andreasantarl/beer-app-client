'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api_profiles');
const ui = require('./ui_profiles');
const app = require('../app.js');

const onCreateMyProfile = (event) => {
  // $("#view-profile").hide();
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createMyProfile(data)
  .then(ui.createMyProfileSuccess)
  .catch(error => console.error(error));
};

const onShowMyProfile = () => {
  // $("#view-profile-section").show();
  return api.showMyProfile()
    .then(ui.showMyProfileSuccess)
    .catch(error => console.error(error));
};


const onUpdateMyProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.updateMyProfile(data)
  .then(ui.updateMyProfileSuccess)
  .catch(error => console.error(error));
};

const onLoadMyProfile = (event) => {
  // $('#view-profile').hide();
  // $("#edit-profile-section").show();
  event.preventDefault();
  return api.showMyProfile()
    .then(ui.showProfileForEdit)
    .catch(error => console.error(error));
  // .catch(error => console.error(error));
  // $('#update-profile').on('submit', onUpdateMyProfile);
};

const profileHandlers = () => {
  $('#my-profile').on('click', function(event) {
    event.preventDefault();
    // $('#create-my-profile').show();
    // $('#view-profile-section').hide();
  });
  $('#create-my-profile').on('submit', onCreateMyProfile);
  $('#edit-my-profile-form').on('submit', onUpdateMyProfile);
  $('#view-my-profile').on('click', onShowMyProfile);
  $('#edit-profile-button').on('click', onLoadMyProfile);
};

module.exports = {
  profileHandlers,
};
