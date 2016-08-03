'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const profileCreateTemplate = require('./../templates/profile_create.handlebars');
const profileEditTemplate = require('./../templates/edit_profile_form.handlebars');

const api = require('./api_profiles');
const ui = require('./ui_profiles');
const app = require('../app.js');

const onShowMyProfile = () => {
  console.log(app);
  // let profileId = data.profile.id;
  // let userProfileId = app.profile.id;
  // let profileId = $('#userProfileId').val();
// let userProfileId = app.profile.profile.id;
  return api.showMyProfile()
    .then(ui.showMyProfileSuccess);
    // .catch((error) => {
    //   console.error(error);
    //   // $('#my-profile').on('click', displayProfileForm);
    // });
};

const onCreateMyProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createMyProfile(data)
  .then(ui.createMyProfileSuccess)
  // .then(onShowMyProfile)
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
  event.preventDefault();
  return api.showMyProfile()
    .then(ui.showProfileForEdit)
    .catch(error => console.error(error));
};

const displayProfileForm = () => {
  $('#handlebars').html(profileCreateTemplate());
  $('#create-my-profile').on('submit', onCreateMyProfile);
};

const profileHandlers = () => {
  $('#my-profile').on('click', displayProfileForm);
  $('#edit-my-profile-form').on('submit', onUpdateMyProfile);
  $('#view-my-profile').on('click', onShowMyProfile);
  $('body').on('click', '#edit-profile-button', onLoadMyProfile);
  $('body').on('submit', '#edit-my-profile-form', onUpdateMyProfile);

};

module.exports = {
  profileHandlers,
  displayProfileForm,
};
