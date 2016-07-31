'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api_profiles');
const ui = require('./ui_profiles');

const onCreateMyProfile = (event) => {

  event.preventDefault();
  let data = getFormFields(event.target);

  if($('#profile-private').attr('checked')) {
      data.profiles.profile_private = true;
  } else {
      data.profiles.profile_private = false;
  }
  console.log(data);
  api.createMyProfile(data)
  .then(ui.createMyProfileSuccess)
  .catch(error => console.error(error))
};

const onShowMyProfile = () => {
  return api.showMyProfile()
    .then(ui.showMyProfileSuccess)
    .catch(error => console.error(error))
};

const onUpdateMyProfile = (event) => {
  event.preventDefault();
  // let buttonId = $(event.target).find('.save-profile-button').attr('data-id');
  // console.log(buttonId);
  let data = getFormFields(event.target);
  api.updateMyProfile(data)
  .then(ui.updateMyProfileSuccess)
  .catch(error => console.error(error))
};

const profileHandlers = () => {
  $('#my-profile').on('click', function(event) {
    event.preventDefault();
    $('#create-my-profile').show();
  });
  $('#create-my-profile').on('submit', onCreateMyProfile);
  $('#update-profile-form').on('submit', onUpdateMyProfile);
  $('#show-profile').on('submit', onShowMyProfile);
  // $('#open-my-buckets').on('click', onUserBuckets);
  // $('#view-all-user-buckets').on('click', onAllUserBuckets);
};
//
module.exports = {
  profileHandlers,
};
