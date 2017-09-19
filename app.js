require('can-stache-bindings');
var types = require('can-util/js/types/types');
var DefineMap = require('can-define/map/map');

module.exports = DefineMap.extend({
  target: { value: "DoneJS World" }, 
  later: {value: false},
  init: function() {
    setTimeout(function() {
      this.set("later", true);
    }.bind(this), 3000);
  }
});
