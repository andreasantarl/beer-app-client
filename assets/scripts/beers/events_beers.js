'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const beersCreateTemplate = require('./../templates/create_beer_template.handlebars');
const displayBeersTemplate = require('./../templates/display_beers.handlebars');
const addOtherBeerTemplate = require('./../templates/add_other_beer.handlebars');
const displayAllUserBeersTemplate = require('./../templates/display_everyone_beers.handlebars');

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
};

const onSortMyBeers = (event) => {
  event.preventDefault();
  let element = document.getElementById("sort-by");
  let sort = element.options[element.selectedIndex].value;
  api.showUserBeers()
    .then((data) => {
      console.log(sort);
      bubbleSort(data, sort);
      $('#handlebars').html(displayBeersTemplate(data));
    })
    .catch(error => console.error(error));
};

const onSortTheirBeers = (event) => {
  event.preventDefault();
  let element = document.getElementById("sort-by");
  let sort = element.options[element.selectedIndex].value;
  api.showAllUserBeers()
    .then((data) => {
      console.log(sort);
      bubbleSort(data, sort);
      $('#handlebars').html(displayAllUserBeersTemplate(data));
    })
    .catch(error => console.error(error));
};

const bubbleSort = (data, sort) => {
  console.log("Bubble ", sort);
  let beers = data.beers;
  let tmp;
  if (sort === "beer_name") {
  // console.log(beers[1].beer_name);
    for (let i = 0; i < beers.length; i++) {
      for (let j = 0; j < (beers.length - i - 1); j++) {
        if (beers[j].beer_name.toUpperCase() > beers[j + 1].beer_name.toUpperCase()){
          tmp = beers[j];
          beers[j] = beers[j + 1];
          beers[j + 1] = tmp;
        }
      }
    }
  } else if (sort === "company_name"){
    for (let i = 0; i < beers.length; i++) {
      for (let j = 0; j < (beers.length - i - 1); j++) {
        if (beers[j].company_name.toUpperCase() > beers[j + 1].company_name.toUpperCase()){
          tmp = beers[j];
          beers[j] = beers[j + 1];
          beers[j + 1] = tmp;
        }
      }
    }
  } else if (sort === "beer_style") {
    for (let i = 0; i < beers.length; i++) {
        for (let j = 0; j < (beers.length - i - 1); j++) {
          if (beers[j].beer_style.toUpperCase() > beers[j + 1].beer_style.toUpperCase()){
            tmp = beers[j];
            beers[j] = beers[j + 1];
            beers[j + 1] = tmp;
          }
        }
      }
    } else if (sort === "abv") {
      for (let i = 0; i < beers.length; i++) {
        for (let j = 0; j < (beers.length - i - 1); j++) {
          if (parseFloat(beers[j].abv) > parseFloat(beers[j + 1].abv)){
            tmp = beers[j];
            beers[j] = beers[j + 1];
            beers[j + 1] = tmp;
          }
        }
      }
    }
  return tmp;
};


const beerHandlers = () => {
  $('#create-beers-button').on('click', displayBeerForm);
  $('#my-beers').on('click', onShowMyBeers);
  $('body').on('submit', '#edit-beer-profile', saveBeerChanges);
  $('#their-beers').on('click', onShowAllUserBeers);
  $('body').on('submit', '#add-someones-beer', displayOtherUserBeerEdit);
  $('body').on('submit', '#add-other-beer-profile', onSaveSomeonesBeer);
  $('body').on('click', '.myBeers', onDisplayOneBeerInfo);
  $('body').on('click', '.sort-display', onSortMyBeers);
  $('body').on('click', '.sort-display-everyone', onSortTheirBeers);
  $('body').on('click', '.delete-beer-button', onDeleteBeer);
  $('body').on('click', '.edit-beer-button', onEditBeer);
};

module.exports = {
  beerHandlers,
};
