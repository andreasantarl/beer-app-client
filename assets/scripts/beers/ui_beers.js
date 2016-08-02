'use strict';

// const app = require('../app.js');
const displayBeersTemplate = require('./../templates/display_beers.handlebars');

const createOneBeerSuccess = (data) => {
  console.log(data);
  // app.user.beers = data.beers;
  $('input[type="text"], textarea').val('');
  $('#handlebars').html('');
  $('#myBeerModal').modal('toggle');
};

const showUserBeersSuccess = (data) => {
  console.log(data);
  $('#handlebars').html(displayBeersTemplate(data));
  // $('#handlebars').html(displayBeersTemplate());
};

const deleteBeerSuccess = () => {
  // console.log('Bucket deleted successfully');
  app.beer = null;
};

const editBeerSuccess = (data) => {
  // $(".modal-fullscreen.update-bucket").modal('hide');
};


module.exports = {
  createOneBeerSuccess,
  showUserBeersSuccess,
  deleteBeerSuccess,
  editBeerSuccess,
};
