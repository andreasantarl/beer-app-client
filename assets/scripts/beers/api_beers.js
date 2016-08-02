'use strict';

const app = require('../app.js');

const createOneBeer = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
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

const showUserBeers = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers',
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.user.token,
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
        Authorization: 'Token token=' + app.user.token,
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

const deleteBeer = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/beers/' + id,
      method: "DELETE",
      headers: {
        Authorization: 'Token token=' + app.user.token,
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


module.exports = {
  createOneBeer,
  showUserBeers,
  editBeer,
  deleteBeer,
};
