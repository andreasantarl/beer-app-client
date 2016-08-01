'use strict';

const app = require('../app.js');
const profileTemplate = require('./../templates/view_my_profile_form.handlebars');
const profileEditTemplate = require('./../templates/edit_my_profile.handlebars');


const createMyProfileSuccess = (data) => {
  // console.log(data);
    app.profile = data;
    app.userProfileId = data.profile.id;
  console.log(data);
};

const showMyProfileSuccess = (data) => {
  // $("#create-my-profile").hide();
  // $("#view-profile-section").show();
  $('#view-profile').html(profileTemplate(data.profile));
  // $('#edit-profile-button').on('click', onEditWorkout);
};

const showProfileForEdit = (data) => {
  // console.log("hello");
  // console.log(data.profile);
  // $("#view-profile-section").hide();
  $('#edit-profile').html(profileEditTemplate(data.profile));
  // $('.workout-display').on('submit', onEditWorkout);
};

const updateMyProfileSuccess = () => {
  // $('#edit-profile').hide();
};

// const showProfileForEditSuccess = (data) => {
//   $("#create-my-profile").hide();
//   $("#view-profile").hide();
//   $('#edit-profile').html(profileEditTemplate(data.profile));
//   // $('.workout-display').on('submit', onEditWorkout);
// };

module.exports = {
  createMyProfileSuccess,
  showMyProfileSuccess,
  showProfileForEdit,
  updateMyProfileSuccess,
};
