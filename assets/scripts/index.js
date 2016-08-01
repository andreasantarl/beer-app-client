'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');


const authEvents = require('./auth/events.js');
const profileEvents = require('./profiles/events_profiles.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  profileEvents.profileHandlers();
  $("#create-my-profile").hide();
  $("#profile-dropdown").hide();
  $("#view-profile-section").hide();
  $("#edit-profile-section").hide();



});
