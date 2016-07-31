'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/sign-up',
      method: "POST",
      data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const signIn = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/sign-in',
      method: "POST",
      data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const signOut = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/sign-out/' + app.user.id,
      method: "DELETE",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const changePassword = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/change-password/' + app.user.id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  // setProfile,
};
