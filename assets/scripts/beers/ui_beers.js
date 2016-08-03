'use strict';

const app = require('../app.js');
// const displayBeersTemplate = require('./../templates/display_beers.handlebars');
const beersTemplate = require('./../templates/edit_beer_template.handlebars');
const displayAllUserBeersTemplate = require('./../templates/display_everyone_beers.handlebars');


const createOneBeerSuccess = (data) => {
  console.log(data);
  app.user.beers = data.beers;
  $('input[type="text"], textarea').val('');
  $('#handlebars').html('');
  $('#myBeerModal').modal('toggle');
};

const showOneBeerSuccess = (data) => {
  console.log("beer data ", data);
  $('#myBeerModal').modal('toggle');
  $('.beer-modal-body').html(beersTemplate(data));
};

const showUserBeersSuccess = (data) => {
  console.log(data);
  // $('#handlebars').html(displayBeersTemplate(data));

  // $('#handlebars').html(displayBeersTemplate());
};

const deleteBeerSuccess = () => {
  // console.log('Bucket deleted successfully');
  console.log(app);
  //  app.user.beers.id = null;
};

const editBeerSuccess = (data) => {
  // $(".modal-fullscreen.update-bucket").modal('hide');
  $('#myBeerModal').modal('toggle');

};

const showAllUserBeersSuccess = (data) => {
  console.log('user beers ', data);
  $('#handlebars').html(displayAllUserBeersTemplate(data));
}


module.exports = {
  createOneBeerSuccess,
  showUserBeersSuccess,
  deleteBeerSuccess,
  editBeerSuccess,
  showOneBeerSuccess,
  showAllUserBeersSuccess,
};
