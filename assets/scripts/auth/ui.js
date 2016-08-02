'use strict';

const app = require('../app.js');

// let userId;
$("#sign-out").hide();
$("#changePasswordModalbutton").hide();
$("#profileModalbutton").hide();
// $("#myNewWorkoutButton").hide();
$("#my-profile").hide();


const success = (data) => {
  $('#sign-up-message').text("Thank you for creating an account!  Please now sign in.");
};

const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  $("#loginModal").modal("hide");
  $("#sign-out").show();
  $("#changePasswordModalbutton").show();
  $("#profileModalbutton").show();
  $("#log-in-nav").hide();
  $("#my-profile").show();
  $("#sign-in-success-nav").show();
  $(".login-incomplete").addClass('hidden');
  $(".login-success-nav").removeClass('hidden');
  return app.user.id;

};

const signOutSuccess = () => {
//  console.log('User signed out successfully');
  app.user = null;
  $("#sign-out").hide();
  $("#changePasswordModalbutton").hide();
  $("#profileModalbutton").hide();
  // $("#workout-information-body").hide();
  // $("#myNewWorkoutButton").hide();
  $(".login-info").val('');
  $(".sign-up-info").val('');
  $('.ty-msg').remove();
  $("#signUpSignIn").show();
  $("#create-my-profile").hide();
  $("#view-profile").hide();

};
const changePasswordSuccess = () => {
  $("#changePasswordModal").modal("hide");
  $(".password-info").val("");
};


const getUserIdSuccess = (data) => {

  app.user = data.user;
    console.log('is profile:', app.user);
    return app.user;
};

module.exports = {
  success,
  // failure,
  signInSuccess,
  // signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  getUserIdSuccess
  // changePasswordFailure,
};
