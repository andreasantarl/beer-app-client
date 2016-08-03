'use strict';

const app = require('../app.js');
const profileTemplate = require('./../templates/view_my_profile_form.handlebars');
// const profileEditTemplate = require('./../templates/edit_my_profile.handlebars');
const profileEditTemplate = require('./../templates/edit_profile_form.handlebars');

const createMyProfileSuccess = (data) => {
  app.profile = data.profile;
};

const showMyProfileSuccess = (data) => {
  console.log(data);
  $('#handlebars').html(profileTemplate(data.profile));
};

const showProfileForEdit = (data) => {
   $('#handlebars').html(profileEditTemplate(data.profile));
};

const updateMyProfileSuccess = () => {
     $('#handlebars').html('');
};

module.exports = {
  createMyProfileSuccess,
  showMyProfileSuccess,
  showProfileForEdit,
  updateMyProfileSuccess,
};
