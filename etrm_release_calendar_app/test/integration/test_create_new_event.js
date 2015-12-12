var request = require('supertest');
var app = require('../../app');
// Load ordering - it is necessary for the DB config is loaded before the express application, otherwise `process.env` will have the development configurations loaded before we try to load the database
var db = require('../../config/db_connection');

var carsCollection = db.get('cars');


describe('Create New Event', function () {
  it('renders create new event page', function (done) {
    request(app).get('/')
      .expect(200, done);
  });
});

// describe('Index view for cars resource', function () {
//   beforeEach(function () {
//     carsCollection.remove({});
//   });

//   after(function() {
//     carsCollection.remove({});
//     // close database connection
//     db.close();
//   });

//   it('displays a list of cars in the database', function (done) {
//     var car = {make: "Nissan", model: "Xterra", model_year: 2005};
//     carsCollection.insert(car);

//     request(app).get('/cars')
//       .expect(/List of cars/)
//       .expect(/2005 Nissan Xterra/, done);
//   });
// });