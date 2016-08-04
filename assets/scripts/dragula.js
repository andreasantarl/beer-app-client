'use strict';

module.exports = function () {
  const dragula = require('dragula');

  dragula({
    isContainer: function (el) {
      return el.classList.contains('draggable');
    },
  });
};
