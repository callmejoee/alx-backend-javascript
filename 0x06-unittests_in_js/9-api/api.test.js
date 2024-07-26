const request = require('request');
const { expect } = require('chai');
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
      done();
    });
  });
});

describe('Cart page', function() {
  before(function(done) {
    // Ensure server is running
    done();
  });

  after(function(done) {
    // Close server after tests
    server.close(done);
  });

  it('should return status 200 for valid cart ID', function(done) {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for invalid cart ID', function(done) {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
