'use strict';

/* global describe, it: false*/

var chai = require('chai');
var expect = chai.expect;

var magicword = require('./');

describe('magicword -', function() {

  describe('basics -', function () {

    it('should create a 9 characters password by default', function () {
      // given
      var pw = magicword();
      console.log(pw);
      // then
      expect(pw.length).to.eql(9);
    });


    it('should create a 20 characters password', function () {
      // given
      var pw = magicword(20);

      // then
      expect(pw.length).to.eql(20);
    });


    it('should create a password with at least: one number, one uppercase and one lowercase string', function () {
      // given
      var pw = magicword();

      // then
      expect(pw).to.match(/([A-Z])+/);
      expect(pw).to.match(/([a-z])+/);
      expect(pw).to.match(/([0-9])+/);
    });

  });

  describe('flags -', function () {

    it('should create a password with only numbers', function () {
      // given
      var pw = magicword({ numbers: true });

      // then
      expect(pw).to.match(/[0-9]{9}/);
    });


    it('should create a password with only letters', function () {
      // given
      var pw = magicword({ upper: true, lower: true });

      // then
      expect(pw).to.match(/[A-z]{9}/);
    });


    it('should create a password with only lowercase letters and numbers', function () {
      // given
      var pw = magicword({ l: true, n: true });

      // then
      expect(pw).to.match(/[a-z]+|\d+/);
    });


    it('should create a password without lowercase letter', function () {
      // given
      var pw = magicword({ lower: false });

      // then
      expect(pw).to.match(/[^a-z]/);
    });

  });

});
