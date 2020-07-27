"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1 = void 0;
const express = require("express");
const usercontroller_1 = require("../../entity/user/usercontroller");
const bannercontroller_1 = require("../../entity/banner/bannercontroller");
const user_health_information_controller_1 = require("../../entity/user-health-information/user-health-information-controller");
let v1 = express.Router();
exports.v1 = v1;
// user
v1.get("/user/login", usercontroller_1.UserController.login);
// banner
v1.get("/banners", bannercontroller_1.BannerController.findAll);
v1.get("/banner/:id", bannercontroller_1.BannerController.findOne);
v1.post("/banner/create", bannercontroller_1.BannerController.create);
v1.post("/banner/update/:id", bannercontroller_1.BannerController.updateById);
v1.post("banner/del/:id", bannercontroller_1.BannerController.deleteById);
// userHealthInformation
v1.get("/userHealthInformations", user_health_information_controller_1.UserHealthInformationController.findAll);
v1.get("/userHealthInformation/:id", user_health_information_controller_1.UserHealthInformationController.findOne);
v1.post("/userHealthInformation/create", user_health_information_controller_1.UserHealthInformationController.create);
v1.post("/userHealthInformation/update/:id", user_health_information_controller_1.UserHealthInformationController.updateById);
v1.post("/userHealthInformation/del/:id", user_health_information_controller_1.UserHealthInformationController.deleteById);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcnMvYXBpL3YxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyxxRUFBZ0U7QUFDaEUsMkVBQXNFO0FBQ3RFLGdJQUF3SDtBQUN4SCxJQUFJLEVBQUUsR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBa0JsQyxnQkFBRTtBQWpCVixPQUFPO0FBQ1AsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU1QyxTQUFTO0FBQ1QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsbUNBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUNBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNELEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdkQsd0JBQXdCO0FBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsb0VBQStCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxvRUFBK0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RSxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLG9FQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pGLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsb0VBQStCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekYsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxvRUFBK0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJyb3V0ZXJzL2FwaS92MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7VXNlckNvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9lbnRpdHkvdXNlci91c2VyY29udHJvbGxlclwiO1xuaW1wb3J0IHtCYW5uZXJDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vZW50aXR5L2Jhbm5lci9iYW5uZXJjb250cm9sbGVyXCI7XG5pbXBvcnQge1VzZXJIZWFsdGhJbmZvcm1hdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9lbnRpdHkvdXNlci1oZWFsdGgtaW5mb3JtYXRpb24vdXNlci1oZWFsdGgtaW5mb3JtYXRpb24tY29udHJvbGxlclwiO1xubGV0IHYxOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4vLyB1c2VyXG52MS5nZXQoXCIvdXNlci9sb2dpblwiLCBVc2VyQ29udHJvbGxlci5sb2dpbik7XG5cbi8vIGJhbm5lclxudjEuZ2V0KFwiL2Jhbm5lcnNcIiwgQmFubmVyQ29udHJvbGxlci5maW5kQWxsKTtcbnYxLmdldChcIi9iYW5uZXIvOmlkXCIsIEJhbm5lckNvbnRyb2xsZXIuZmluZE9uZSk7XG52MS5wb3N0KFwiL2Jhbm5lci9jcmVhdGVcIiwgQmFubmVyQ29udHJvbGxlci5jcmVhdGUpO1xudjEucG9zdChcIi9iYW5uZXIvdXBkYXRlLzppZFwiLCBCYW5uZXJDb250cm9sbGVyLnVwZGF0ZUJ5SWQpO1xudjEucG9zdChcImJhbm5lci9kZWwvOmlkXCIsIEJhbm5lckNvbnRyb2xsZXIuZGVsZXRlQnlJZCk7XG5cbi8vIHVzZXJIZWFsdGhJbmZvcm1hdGlvblxudjEuZ2V0KFwiL3VzZXJIZWFsdGhJbmZvcm1hdGlvbnNcIiwgVXNlckhlYWx0aEluZm9ybWF0aW9uQ29udHJvbGxlci5maW5kQWxsKTtcbnYxLmdldChcIi91c2VySGVhbHRoSW5mb3JtYXRpb24vOmlkXCIsIFVzZXJIZWFsdGhJbmZvcm1hdGlvbkNvbnRyb2xsZXIuZmluZE9uZSk7XG52MS5wb3N0KFwiL3VzZXJIZWFsdGhJbmZvcm1hdGlvbi9jcmVhdGVcIiwgVXNlckhlYWx0aEluZm9ybWF0aW9uQ29udHJvbGxlci5jcmVhdGUpO1xudjEucG9zdChcIi91c2VySGVhbHRoSW5mb3JtYXRpb24vdXBkYXRlLzppZFwiLCBVc2VySGVhbHRoSW5mb3JtYXRpb25Db250cm9sbGVyLnVwZGF0ZUJ5SWQpO1xudjEucG9zdChcIi91c2VySGVhbHRoSW5mb3JtYXRpb24vZGVsLzppZFwiLCBVc2VySGVhbHRoSW5mb3JtYXRpb25Db250cm9sbGVyLmRlbGV0ZUJ5SWQpO1xuXG5leHBvcnQge3YxfTtcblxuIl19