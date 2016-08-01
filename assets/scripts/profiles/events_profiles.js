'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api_profiles');
const ui = require('./ui_profiles');
const app = require('../app.js');

const onCreateMyProfile = (event) => {
  $("#view-profile").hide();
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createMyProfile(data)
  .then(ui.createMyProfileSuccess)
  .catch(error => console.error(error));
};

const onShowMyProfile = () => {
  $('#view-profile').show();
  return api.showMyProfile()
    .then(ui.showMyProfileSuccess)
    .catch(error => console.error(error));
};

const onUpdateMyProfile = (event) => {
  event.preventDefault();
  // let buttonId = $(event.target).find('.save-profile-button').attr('data-id');
  // console.log(buttonId);
  let data = getFormFields(event.target);
  api.updateMyProfile(data)
  .then(ui.updateMyProfileSuccess)
  .catch(error => console.error(error));
};

const profileHandlers = () => {
  $('#my-profile').on('click', function(event) {
    event.preventDefault();
    $('#create-my-profile').show();
    $('#view-profile').hide();
  });
  $('#create-my-profile').on('submit', onCreateMyProfile);
  $('#update-profile-form').on('submit', onUpdateMyProfile);
  $('#view-my-profile').on('click', onShowMyProfile);
};

module.exports = {
  profileHandlers,
};
