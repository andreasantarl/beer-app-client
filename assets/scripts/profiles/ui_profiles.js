'use strict';

const app = require('../app.js');
// const api = require('./bucket-api');
const profileTemplate = require('./../templates/view_my_profile.handlebars');

const createMyProfileSuccess = (data) => {
  // console.log(data);
    // app.user.profile = data.profile;
    app.userProfileId = data.profile.id;
    console.log(app);
};

const showMyProfileSuccess = (data) => {
  $('#view-profile').html("hello");
  $('#view-profile').html(profileTemplate(data.profile));
};

module.exports = {
  createMyProfileSuccess,
  showMyProfileSuccess,
};
