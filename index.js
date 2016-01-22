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
  
  /*
  treeFor: function(tree) {
    console.log('tree ' + JSON.stringify(tree));
    
    return {};
  },*/
  
  outputReady: function(result) {
    console.log('outputready ' + result.directory);
    console.log(JSON.stringify(result));
  },
  
  included: function included(app, parentAddon) {
    var target = (parentAddon || app);
    
    Object.keys(target).forEach(k => console.log('included ' + k));
    Object.keys(target.trees).forEach(k => console.log('trees ' + k));
    console.log(JSON.stringify(target.trees));
    //console.log('included ' + JSON.stringify(target));
  },
  
  /*
  postprocessTree: function(tree) {
    console.log(' ppt ' + JSON.stringify(tree));
    
    return {};
  },*/
  
  postBuild: function(result) {
    console.log('postBuild ' + JSON.stringify(result));
  }
  
};
