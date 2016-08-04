'use strict';

let drake = dragula(containers, {
  isContainer: function (el) {
    return false; // only elements in drake.containers will be taken into account
},
  copy: false,                       // elements are moved by default, not copied
  // copySortSource: false,             // elements in copy-source containers can be reordered
  revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
  // mirrorContainer: document.body,    // set the element that gets mirror elements appended
  // ignoreInputTextSelection: true     // allows users to select input text, see details below
});

drake.containers.push(container);

module.exports = {
  drake,
}
