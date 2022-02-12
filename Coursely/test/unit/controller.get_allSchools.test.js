const model = require("../../database/models/School");
const controller = require("../../controllers/school-controller");
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

describe("controller.get_allSchools", () => {
   test.only("getAllSchools function is defined", () => {
      expect(controller.get_All_Schools).to.be.a("function");
   });

   test.only("return all schools", async () => {
      model.find.mockReturnValue(mockData);
      await controller.get_All_Schools(req, res, next);
      expect(res.statusCode).to.deep.equal(200);
      expect(res._getJSONData()).to.deep.equal(mockData);
   });

   test.only("return 500 when find throw an exception ", async () => {
      model.find.mockRejectedValue("error");
      await controller.get_All_Schools(req, res, next);
      expect(res.statusCode).to.deep.equal(500);
      expect(res._getJSONData()).to.deep.equal("error");
   });
});
