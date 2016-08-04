'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');


const authEvents = require('./auth/events.js');
const profileEvents = require('./profiles/events_profiles.js');
const beerEvents = require('./beers/events_beers.js');

const drake = require('./dragula');

// On document ready
$(() => {
  authEvents.addHandlers();
  profileEvents.profileHandlers();
  beerEvents.beerHandlers();
  drake();
});
