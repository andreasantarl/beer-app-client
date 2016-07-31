'use strict';

const app = require('../app.js');

// let userId;
$("#sign-out").hide();
$("#changePasswordModalbutton").hide();
$("#profileModalbutton").hide();
$("#myNewWorkoutButton").hide();
$("#workout-information-body").hide();

const success = (data) => {
//  app.user = data.user; //
  if (data) {
//    console.log(data);
  } else {
//    console.log('Success');
  }
  $('#sign-up-message').text("Thank you for creating an account!  Please now sign in.");
};

const failure = (error) => {
  console.error(error);
  $('#sign-up-message').text('');
  $('#sign-up-message').text("Please enter a valid username and/or password.");

};

const signInFailure = (error) => {
  console.error(error);
  $('#sign-in-message').text("Please enter a valid username and/or password");

};

const signInSuccess = (data) => {
  app.user = data.user;
//  console.log("App. user is ", app.user);
  $("#loginModal").modal("hide");
  $("#sign-out").show();
  $("#changePasswordModalbutton").show();
  $("#profileModalbutton").show();
  $("#myNewWorkoutButton").show();
  $("#workout-information-body").show();
  $("#workout-information-body").show();
  $("#signUpSignIn").hide();


};

const signOutSuccess = () => {
//  console.log('User signed out successfully');
  app.user = null;
  $("#sign-out").hide();
  $("#changePasswordModalbutton").hide();
  $("#profileModalbutton").hide();
  $("#workout-information-body").hide();
  $("#myNewWorkoutButton").hide();
  $(".login-info").val('');
  $(".sign-up-info").val('');
  $('.ty-msg').remove();
  $("#signUpSignIn").show();
};
const changePasswordSuccess = () => {
  $("#changePasswordModal").modal("hide");
  $(".password-info").val("");
};

const changePasswordFailure = (error) => {
  console.error(error);
  $('#change-password-message').text("Please enter a valid password");

};

module.exports = {
  success,
  failure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
};
