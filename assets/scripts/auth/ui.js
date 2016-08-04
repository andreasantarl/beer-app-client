'use strict';

const app = require('../app.js');

$("#sign-out").hide();
$("#changePasswordModalbutton").hide();
$("#profileModalbutton").hide();
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
  $('#create-beers-button').prop('disabled', false);
};

const signOutSuccess = () => {
  app.user = null;
  $("#sign-out").hide();
  $("#changePasswordModalbutton").hide();
  $("#profileModalbutton").hide();
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
  $('#create-beers-button').prop('disabled', true);
};

const changePasswordSuccess = () => {
  $("#changePasswordModal").modal("hide");
  $(".password-info").val("");
};

const getUserIdSuccess = (data) => {
    return data;
};

module.exports = {
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getUserIdSuccess
};
