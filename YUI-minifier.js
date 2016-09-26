// Using YUI Compressor for CSS 
var compressor = require('node-minify');

new compressor.minify({
  type : 'yui-js',
  fileIn: 'app.js',
  fileOut: 'app-min-yui.js',
  callback:  function(err, min){
    console.log(err);
    console.log(min); 
  }
});