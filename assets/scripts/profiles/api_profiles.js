'use strict';

const app = require('../app.js');

const createMyProfile = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles',
      method: "POST",
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

const showMyProfile = (profileId) => {
  console.log(app.user);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/' + profileId,
      method: 'GET',
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

const updateMyProfile = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/' + app.profile.profile.id,
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


// const showUserBuckets = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: app.host + '/userbuckets',
//       method: 'GET',
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       success: (response) => {
//         resolve(response);
//       },
//       error: (error) => {
//         reject(error);
//       },
//     });
//   });
// };

// const showAllUserBuckets = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: app.host + '/allbuckets',
//       method: 'GET',
//       success: (response) => {
//         resolve(response);
//       },
//       error: (error) => {
//         reject(error);
//       },
//     });
//   });
// };

// const deleteBucket = (id) => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: app.host + '/buckets/' + id,
//       method: "DELETE",
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       success: (response) => {
//         resolve(response);
//       },
//       error: (error) => {
//         reject(error);
//       },
//     });
//   });
// };

module.exports = {
  createMyProfile,
  updateMyProfile,
  showMyProfile,
};
