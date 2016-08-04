'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const beersCreateTemplate = require('./../templates/create_beer_template.handlebars');
const beersEditTemplate = require('./../templates/edit_beer_template.handlebars');
const displayBeersTemplate = require('./../templates/display_beers.handlebars');

const api = require('./api_beers');
const ui = require('./ui_beers');
const app = require('../app.js');

// $('#sortable', 'click').sortable();

const onCreateOneBeer = (event) => {
  event.preventDefault();
  // let data = getFormFields(event.target);
  let data = new FormData(event.target);
  console.log("show FormData ", data);
  api.createOneBeer(data)
  .then(api.addToTriedBeers)
  .then(ui.createOneBeerSuccess)
  // .then(api.showUserBeers)
  // .then(ui.showUserBeersSuccess)

  .then(onShowMyBeers)
  .catch(error => console.error(error));
};

const onShowMyBeers = () => {
  return api.showUserBeers()
    .then((data) => {
      $('#welcome').html('');
      $('#handlebars').html(displayBeersTemplate(data));
      // $('.delete-beer-button').on('click', onDeleteBeer);
      // $('.edit-beer-button').on('click', onEditBeer);
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
  // let data = getFormFields(event.target);
  console.log(" data id ", id);
  api.showOneBeer(id)  //send buttonID for get request
  .then(ui.showOneBeerSuccess)
  .catch(error => console.error(error));
};

const saveBeerChanges = (event) => {
  event.preventDefault();
  let id = $(event.target).attr('data-id');
  let data = new FormData(event.target);
  // let data = getFormFields(event.target);
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
  // .then(onShowMyBeers)
  .catch(error => console.error(error));

};

const onSaveSomeonesBeer = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  // // console.log(data);
  // // console.log("App data ", app);
  // //bring up a beer with form field data
  // // on submit add it to your bucket
  // //add it to
  // // api.editBeer(data)
  api.addOtherUserBeer(data)
  // .then(ui.showOneBeerSuccess)
  .then(api.addToTriedBeers)
  .then(ui.addOtherUserBeerSuccess)

  .then(onShowMyBeers)
  .catch(error => console.error(error));
};

const displayOtherUserBeerEdit = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('#myBeerModal').modal('toggle');
  $('#handlebars').html(beersEditTemplate(data));
  // $('#beer-profile').on('submit', onSaveSomeonesBeer(data));

}

const beerHandlers = () => {
  $('#create-beers-button').on('click', displayBeerForm);
  $('#my-beers').on('click', onShowMyBeers);
  $('body').on('submit', '#edit-beer-profile', saveBeerChanges);
  $('#their-beers').on('click', onShowAllUserBeers);
  $('body').on('submit', '#add-someones-beer', onSaveSomeonesBeer);
  // $('body').on('submit', '#add-someones-beer', displayOtherUserBeerEdit);
  // $('#add-other-beer').on('click', onSaveSomeonesBeer);
};

module.exports = {
  beerHandlers,
  // displayUserBeers,
};
