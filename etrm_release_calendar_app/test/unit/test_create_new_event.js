var request = require('supertest');
var app = require('../../app');
// Load ordering - it is necessary for the DB config is loaded before the express application, otherwise `process.env` will have the development configurations loaded before we try to load the database
var db = require('../../config/db_connection');

var carsCollection = db.get('cars');


describe('Create New Event', function () {
  it('will have Release Type label', function (done) {
    request(app).get('/')
      .expect(/Release Type/, done);
  });
  
  it('will have Release Title label', function (done) {
    request(app).get('/')
      .expect(/Release Title/, done);
  });
  it('will have start date label', function (done) {
    request(app).get('/')
      .expect(/Start Date/, done);
  });
  
  it('will have end date label', function (done) {
    request(app).get('/')
      .expect(/End Date/, done);
  });
  
  it('will have Activity Details label', function (done) {
    request(app).get('/')
      .expect(/Activity Details/, done);
  });
});