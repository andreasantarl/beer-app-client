'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const beersCreateTemplate = require('./../templates/create_beer_template.handlebars');
const displayBeersTemplate = require('./../templates/display_beers.handlebars');
const addOtherBeerTemplate = require('./../templates/add_other_beer.handlebars');
const drake = require('dragula');

drake($('#draggable'));

const api = require('./api_beers');
const ui = require('./ui_beers');

const onCreateOneBeer = (event) => {
  event.preventDefault();
  let data = new FormData(event.target);
  api.createOneBeer(data)
  .then(api.addToTriedBeers)
  .then(ui.createOneBeerSuccess)
  .then(onShowMyBeers)
  .catch(error => console.error(error));
};

const onShowMyBeers = () => {
  return api.showUserBeers()
    .then((data) => {
      $('#create-beers-button').show();
      $('#welcome').html('');
      $('#handlebars').html(displayBeersTemplate(data));
    })
    .then(() => {
      $('.delete-beer-button').on('click', onDeleteBeer);
      $('.edit-beer-button').on('click', onEditBeer);
    })
    .catch(error => console.error(error));
};

const displayBeerForm = (event) => {
  event.preventDefault();
  $('#myBeerModal').modal('toggle');
  $('.beer-modal-body').html(beersCreateTemplate());
  $('#beer-profile').on('submit', onCreateOneBeer);
};

const onEditBeer = (event) => {
  event.preventDefault();
  let id = $(event.target).attr('data-id');
  api.showOneBeer(id)  //send buttonID for get request
  .then(ui.showOneBeerSuccess)
  .catch(error => console.error(error));
};

const saveBeerChanges = (event) => {
  event.preventDefault();
  let id = $(event.target).attr('data-id');
  let data = new FormData(event.target);
  api.editBeer(data, id)
  .then(ui.editBeerSuccess)
  .then(onShowMyBeers)
  .catch(error => console.error(error));
};


const onDeleteBeer = (event) => {
  event.preventDefault();
  let id = $(event.target).attr('data-id');
  api.deleteBeer(id)
  .then(ui.deleteBeerSuccess)
  .then(onShowMyBeers)
  .catch(error => console.error(error));
};

const onShowAllUserBeers = (event) => {
  event.preventDefault();
  api.showAllUserBeers()
  .then(ui.showAllUserBeersSuccess)
  .catch(error => console.error(error));
};

const onSaveSomeonesBeer = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addOtherUserBeer(data)
  .then(api.addToTriedBeers)
  .then(ui.addOtherUserBeerSuccess)
  .then(onShowMyBeers)
  .catch(error => console.error(error));
};

const displayOtherUserBeerEdit = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  // console.log('user beer data ', data);
  $('#myBeerModal').modal('toggle');
  $('.beer-modal-body').html(addOtherBeerTemplate(data.beers));
};

const onDisplayOneBeerInfo = (event) => {
  event.preventDefault();
  let id = $(event.target).attr('data-id');
  api.showOneBeer(id)  //send buttonID for get request
  .then(ui.showThisBeerInfoSuccess)
  .catch(error => console.error(error));
}


const beerHandlers = () => {
  $('#create-beers-button').on('click', displayBeerForm);
  $('#my-beers').on('click', onShowMyBeers);
  $('body').on('submit', '#edit-beer-profile', saveBeerChanges);
  $('#their-beers').on('click', onShowAllUserBeers);
  $('body').on('submit', '#add-someones-beer', displayOtherUserBeerEdit);
  $('body').on('submit', '#add-other-beer-profile', onSaveSomeonesBeer);
  $('body').on('click', '.myBeers', onDisplayOneBeerInfo);
};

module.exports = {
  beerHandlers,
};
