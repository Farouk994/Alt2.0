const controller = require("../../controllers/school-controller");
const model = require("../../database/models/School");
const httpMock = require("node-mocks-http");
const mockData = require("../mockData/school.json");
model = jest.fn();

