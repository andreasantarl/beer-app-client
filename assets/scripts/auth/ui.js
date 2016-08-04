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

const signInSuccess = () => {
  $("#loginModal").modal("hide");
  $("#sign-out").show();
  $("#changePasswordModalbutton").show();
  $("#profileModalbutton").show();
  $("#log-in-nav").hide();
  $("#my-profile").show();
  $("#sign-in-success-nav").show();
  $(".login-incomplete").addClass('hidden');
  $(".login-success-nav").removeClass('hidden');
  // $('#handlebars').html(displayWelcomeTemplate(data));
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
  $('#handlebars').html('');
  $('#welcome').html('');
  $(".login-incomplete").removeClass('hidden');
  $(".login-success-nav").addClass('hidden');

};
const changePasswordSuccess = () => {
  $("#changePasswordModal").modal("hide");
  $(".password-info").val("");
};


const getUserIdSuccess = (data) => {
    console.log('user is ', app.user);
    console.log('profile is ', app.profile);
    console.log('token is ', app.userToken);
    return data;
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
