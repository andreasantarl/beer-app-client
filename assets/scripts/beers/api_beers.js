'use strict';

const app = require('../app.js');

const createOneBeer = (data) => {
  console.log("create beer data ", data);
  // let fd = new FormData(data);
  // console.log("form data ", fd);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      data: data,
      contentType: false,
      processData: false,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const addToTriedBeers = (data) => {
  console.log(data);
  let beer_id = data.beer.id;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/tried_beers',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      data: {
        tried_beer: {
          beer_id: beer_id,
          profile_id: app.profile.id,
        }
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const showUserBeers = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers',
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const showAllUserBeers = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/all-beers',
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const showOneBeer = (id) => {
  console.log('id in API ', id);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers/' + id,
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const editBeer = (data, id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers/' + id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      data: data,
      contentType: false,
      processData: false,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const deleteBeer = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers/' + id,
      method: "DELETE",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const addOtherUserBeer = (data) => {
  console.log("add other user beer data ", data);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.userToken,
      },
      data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};


module.exports = {
  createOneBeer,
  showUserBeers,
  editBeer,
  deleteBeer,
  showOneBeer,
  addToTriedBeers,
  showAllUserBeers,
  addOtherUserBeer
};
