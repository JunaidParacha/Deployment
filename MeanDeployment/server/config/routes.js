var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
//************RESTful routes for users************
module.exports = (function(app){
  app.get('/users', Users.index);
  app.get('/appointments', Users.getAppointments);
  // //app.get('/users/new', Users.new);
  // app.get('/users/:id', Users.show);
  // //app.get('/users/:id/edit', Users.edit);
  app.post('/create', Users.create);
  // app.put('/users/:id', Users.update);
  app.delete('/appointment/:id', Users.delete);

  app.post('/login', Users.login);
  app.post('/register', Users.register);
});
//************END routes for users****************
