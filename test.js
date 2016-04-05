var assert = require('assert');
var request = require('supertest');

describe('home page', function() {

  var server;

  beforeEach(function() {
    server = require('./app');
  });

  afterEach(function() {
    server.close();
  });

  it('should display hello, world', function(done) {
    request(server)
      .get('/')
      .expect(200)
      .expect('something else')
      .end(done);
  });
});
