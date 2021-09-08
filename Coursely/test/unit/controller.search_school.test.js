const controller = require("../../controllers/school-controller");
const model = require("../../database/models/School");
const httpMock = require("node-mocks-http");
const mockData = require("../mockData/school.json");
const { expect } = require("chai");
model.find = jest.fn();

let req, res, next;

beforeEach(() => {
   req = httpMock.createRequest();
   res = httpMock.createResponse();
   next = null;
});

afterEach(() => {
   model.find.mockClear();
});

describe("Search school route", () => {
   test.only("should return school based on location or school name", () => {
      expect(typeof controller.search_school).to.be.a("function");
   });
});
