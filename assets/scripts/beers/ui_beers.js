'use strict';

const app = require('../app.js');
const beersTemplate = require('./../templates/edit_beer_template.handlebars');
const displayAllUserBeersTemplate = require('./../templates/display_everyone_beers.handlebars');


const createOneBeerSuccess = (data) => {
  // console.log(data);
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
};

const deleteBeerSuccess = () => {

};

const editBeerSuccess = (data) => {
  $('#myBeerModal').modal('toggle');

};

const showAllUserBeersSuccess = (data) => {
  $('#welcome').html('');
  $('#handlebars').html(displayAllUserBeersTemplate(data));
};


module.exports = {
  createOneBeerSuccess,
  showUserBeersSuccess,
  deleteBeerSuccess,
  editBeerSuccess,
  showOneBeerSuccess,
  showAllUserBeersSuccess,
  addOtherUserBeerSuccess
};
