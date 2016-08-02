'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const beersTemplate = require('./../templates/create_edit_beers.handlebars');
// const displayBeersTemplate = require('./../templates/display_beers.handlebars');

// const profileEditTemplate = require('./../templates/edit_profile_form.handlebars');

const api = require('./api_beers');
const ui = require('./ui_beers');
const app = require('../app.js');

const onCreateOneBeer = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createOneBeer(data)
  .then(ui.createOneBeerSuccess)
  .then(api.showUserBeers)
  .then(ui.showUserBeersSuccess)
  .catch(error => console.error(error));
};

const displayBeerForm = (event) => {
  event.preventDefault();
  $('#myBeerModal').modal('toggle');
  $('.beer-modal-body').html(beersTemplate());
  $('#beer-profile').on('submit', onCreateOneBeer);
};

// const onEditBeer = (event) => {
//     event.preventDefault();
//     let buttonId = $(event.target).attr('data-id');
//     // console.log(buttonId);
//     api.showOneBeer(buttonId)  //send buttonID for get request
//     .then(ui.showOneBeerSuccess)
//     .then(() => {
//       $("#submit-bucket-edits").on("submit", onUpdateBucket)
//     })
// editBeerSuccess
//     .catch(error => console.error(error))
// };

const onDeleteBeer = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  api.deleteBeer(buttonId)
  .then(ui.deleteBeerSuccess)
  .then(onUserBuckets)
  .catch(error => console.error(error))
};

const beerHandlers = () => {
  $('#create-beers-button').on('click', displayBeerForm);
};

module.exports = {
  beerHandlers,
  // displayUserBeers,
};
