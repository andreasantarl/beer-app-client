'use strict';

const app = require('../app.js');
const profileTemplate = require('./../templates/view_my_profile.handlebars');

const createMyProfileSuccess = (data) => {
    app.userProfileId = data.profile.id;
};

const showMyProfileSuccess = (data) => {
  $("#create-my-profile").hide();
  $('#view-profile').html(profileTemplate(data.profile));
};

module.exports = {
  createMyProfileSuccess,
  showMyProfileSuccess,
};
