const path = require('path'); 
const fs = require('fs'); 
const _eval = require('eval');

module.exports = {
  name: 'cleanup',
  //aliases: ['cdv'],
  description: 'Scans an ember app checking for dead code',
  works: 'insideProject',

  validateAndRun: function(rawArgs) {
    console.log('validateAndRun ' + rawArgs);
    Object.keys(this.project).forEach(k => console.log(k));
    console.log('root ' + this.project.root);
  },
  
  buildRoutes: function (rootPath) {
    const absRootPath = path.resolve(rootPath);
    if (!fs.existsSync(absRootPath)) {
      throw new Error(`App root folder ${absRootPath} does not exist`);
    }
    const routerPath = path.join(rootPath, 'router.js');
    console.log('path to router ' + routerPath);
    if (!fs.existsSync(routerPath)) {
      throw new Error(`Could not find a router in folder ${absRootPath}`);
    }
    const relRouterPath = './../' + path.relative('.', rootPath).replace(/\\/g, '/') + '/app';
    
    console.log('importing ' + relRouterPath);
    var index = require('../config/environment');
    var router = require(relRouterPath);
    
    return { 'a': true };
  }
};