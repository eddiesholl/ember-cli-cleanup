/* jshint node: true */
'use strict';
var path = require('path');

var commands = {
  'cleanup': require('./lib/cleanup')
}
module.exports = {
  name: 'ember-cli-cleanup',

  blueprintsPath: function () {
    return path.join(__dirname, 'blueprints');
  },

  includedCommands: function () {
    return commands;
  },
  
  preBuild: function (args) {
    //console.log('preBuild ' + args.length);
  },
  
  
};
