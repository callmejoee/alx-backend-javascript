const request = require('request');
const { expect } = require('chai');
<<<<<<< HEAD
const server = require('./api');

describe('Index page', function() {
  before(function(done) {
    // Ensure server is running
    done();
  });

  after(function(done) {
    // Close server after tests
    server.close(done);
  });

  it('should return the correct message', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
=======

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
>>>>>>> b2b61481f12afb7993775c6df571c3757b285f24
      done();
    });
  });
});
