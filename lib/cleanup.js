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
    const routerPath = path.join(rootPath, 'router.js');
    if (!fs.exists(routerPath)) {
      throw new Error(`Could not find a router in folder ${rootPath}`);
    }
    var router = _eval(routerPath);
    
    return { 'a': true };
  }
};