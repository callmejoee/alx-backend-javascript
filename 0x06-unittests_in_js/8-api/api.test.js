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
