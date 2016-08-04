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
  }).then((data) => {
    app.user = data.user;
    app.userToken = data.user.token;
    return data;
  });
};

const signOut = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/sign-out/' + app.user.id,
      method: "DELETE",
      headers: {
        Authorization: 'Token token=' + app.userToken,
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
        Authorization: 'Token token=' + app.userToken,
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

const getUserId = () => {
  console.log(app.user.id);
  console.log('token is ', app.userToken);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/users/' + app.user.id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  }).then((data) => {
    console.log("HEEEEEEEYY", data)
    app.profile = data.user.profile;
    return data;
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getUserId,
};
