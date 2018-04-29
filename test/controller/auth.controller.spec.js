var assert = require("assert");
var authController = require("../../controller/auth.controller");
var chai = require("chai");
var expect = require('chai').expect;
var should = require('chai').should;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
chai.expect();


describe(" AuthController", function() {
        describe("isAuthorized", function() {
           it("should return false when failed", function() {
                       assert.equal(false, authController.isAuthorized(["user"], "admin"));
            })

            it("should return true", function() {
                
                                assert.equal(true, authController.isAuthorized(["user", "admin"], "admin"));
            
                        })
            })

            describe("isAuthorizedAsync", function() {
                it("should return false when failed", function(done) {
                     this.timeout(5500);
                          authController.isAuthorized(["user"], "admin",
                            function(isAuthorized) {
                                assert.equal(false,isAuthorized);
                                
                                     })
                                     done();
                                 })
                       });

                       describe("isAuthorizedAsync", function() {
                        it("should return false when failed due to promise", function() {
                            var isAuth =   authController.isAuthorized('admin12');
                                    expect(isAuth).to.be.false;
                                         })       
                               });

             });



        describe("testing objects", function() {
            it("should return true, since object match", function() {

                var obj1 = {color1: "red", color2: "blue"};
                var obj2 = {color1: "green", color2: "yellow"}

                obj1.should.have.property('color3');

            })

        })