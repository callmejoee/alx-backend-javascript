const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const BASE_URL = 'http://localhost:7865';

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api'); // Import the server
    server.listen(7865, done); // Start the server
  });

  after((done) => {
    server.close(done); // Close the server after tests
  });

  it('should return status code 200', (done) => {
    request.get(`${BASE_URL}/`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`${BASE_URL}/`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional tests can be added here
});
