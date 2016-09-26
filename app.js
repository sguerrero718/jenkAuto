var opn = require('opn');           // opens the browser open running the nodejs app.js file from command prompt
var express = require('express');    // express module
var osName = require('os-name');
// ***************************************************************************
// after you have done too many of these require modules, only then you 
// will understand why we need to use the package.json 
// ***************************************************************************

var PORT = process.env.PORT || 2000; // use default or 2000
var host = 'http://localhost:' + PORT + '/home';

// create instance of express
var app = express();                

// start with the first route /home
app.route('/home')
   .get(function (req, res) {       

       var body = {
           "greeting": "hello there! "           
           , "url": req.hostname
           , "os": osName()                      
       };

       res.send(JSON.stringify(body));

   })
    /*****************************************************
      You may also invoke the following HTTP methods: 
      POST / PUT / DELETE
    ****************************************************
    .post(function (req, res, next) {
        // TODO
    })
    .put(function (req, res, next) {
        // TODO
    })
    .delete(function (req, res, next) {
        // TODO
    })
    */

; // closing the get function


/*
 here is an example of another route
 in case we need to add multiple routes


app.route('/ps')
    .get(function (req, res) {
        res.send('bye bnye');
    });
*/
   

var server = app.listen(PORT, function () {
    console.log('listening on: ' + host );
    // opn(host); // opens the resource on your default browser
    opn(host, { app: ['chrome'] }); // forcing to open on Google Chrome
});
    