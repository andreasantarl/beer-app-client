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

// const failure = (error) => {
//   console.error(error);
//   $('#sign-up-message').text('');
//   $('#sign-up-message').text("Please enter a valid username and/or password.");
//
// };

// const signInFailure = (error) => {
//   console.error(error);
//   $('#sign-in-message').text("Please enter a valid username and/or password");
//
// };

const signInSuccess = (data) => {
  app.user = data.user;
  $("#loginModal").modal("hide");
  $("#sign-out").show();
  $("#changePasswordModalbutton").show();
  $("#profileModalbutton").show();
  $("#signUpSignIn").hide();
  $("#my-profile").show();


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
};
const changePasswordSuccess = () => {
  $("#changePasswordModal").modal("hide");
  $(".password-info").val("");
};

// const changePasswordFailure = (error) => {
//   console.error(error);
//   $('#change-password-message').text("Please enter a valid password");
//
// };

const getUserProfileIdSuccess = (data) => {
  // console.log(data);
  app.user.profile = data.user.profile;
};

module.exports = {
  success,
  // failure,
  signInSuccess,
  // signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  getUserProfileIdSuccess
  // changePasswordFailure,
};
