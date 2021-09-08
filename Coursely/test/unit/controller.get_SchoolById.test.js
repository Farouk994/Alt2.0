const controller = require("../../controllers/school-controller");
const model = require("../../database/models/School");
const httpMock = require("node-mocks-http");
const mockData = require("../mockData/school.json");
model.findById = jest.fn();

let req, res, next;

beforeEach(() => {
   req = httpMock.createRequest();
   res = httpMock.createResponse();
   next = null;
});

afterEach(() => {
   model.findById.mockClear();
});

describe("controller.get_SchoolById", () => {
   test.only("should getSchoolById", () => {
      expect(typeof controller.get_SchoolById).toBe("function");
   });

   test.only("return school by id", async () => {
      req.params._id = mockData[0]._id;
      model.findById.mockReturnValue(mockData[0]._id);
      await controller.get_SchoolById(req, res, next);
      expect(model.findById).toHaveBeenCalledWith(req.params._id);
   });
});
