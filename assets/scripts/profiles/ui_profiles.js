'use strict';

const app = require('../app.js');
const profileTemplate = require('./../templates/view_my_profile_form.handlebars');
const profileEditTemplate = require('./../templates/edit_my_profile.handlebars');


const createMyProfileSuccess = (data) => {
    app.userProfileId = data.profile.id;
};

const showMyProfileSuccess = (data) => {
  $("#create-my-profile").hide();
  $('#view-profile').html(profileTemplate(data.profile));
  // $('#edit-profile-button').on('click', onEditWorkout);
};

const showProfileForEdit = (data) => {
  console.log("hello");
  console.log(data.profile);
  $('#edit-profile').html(profileEditTemplate(data.profile));
  // $('.workout-display').on('submit', onEditWorkout);
};

const updateMyProfileSuccess = () => {

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
