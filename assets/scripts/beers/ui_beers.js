'use strict';

const app = require('../app.js');
const beersTemplate = require('./../templates/edit_beer_template.handlebars');
const displayAllUserBeersTemplate = require('./../templates/display_everyone_beers.handlebars');
const oneBeerTemplate = require('./../templates/display_one_beer.handlebars');

const createOneBeerSuccess = (data) => {
  app.user.beers = data.beers;
  $('#welcome').html('');
  $('input[type="text"], textarea').val('');
  $('#handlebars').html('');
  $('#myBeerModal').modal('toggle');

};

const addOtherUserBeerSuccess = (data) => {
  app.user.beers = data.beers;
  $('#myBeerModal').modal('toggle');
  $('#handlebars').html('');
  $('#welcome').html('');
};

const showOneBeerSuccess = (data) => {
  $('#welcome').html('');
  $('#myBeerModal').modal('toggle');
  $('.beer-modal-body').html(beersTemplate(data));
};

const showUserBeersSuccess = (data) => {
  $('#welcome').html('');
  $('#sortable').sortable();
};

const deleteBeerSuccess = () => {

};

const editBeerSuccess = (data) => {
  $('#myBeerModal').modal('toggle');
};

const showAllUserBeersSuccess = (data) => {
  $('#create-beers-button').hide();
  $('#welcome').html('');
  $('#handlebars').html(displayAllUserBeersTemplate(data));
};

const showThisBeerInfoSuccess = (data) => {
  $('#welcome').html('');
  $('#view-my-beer-info').modal('toggle');
  $('.view-beer-modal-body').html(oneBeerTemplate(data.beer));
};

module.exports = {
  createOneBeerSuccess,
  showUserBeersSuccess,
  deleteBeerSuccess,
  editBeerSuccess,
  showOneBeerSuccess,
  showAllUserBeersSuccess,
  addOtherUserBeerSuccess,
  showThisBeerInfoSuccess,
};
