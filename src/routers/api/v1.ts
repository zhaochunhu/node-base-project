import * as express from "express";
import {UserController} from "../../entity/user/usercontroller";
import {BannerController} from "../../entity/banner/bannercontroller";
import {UserHealthInformationController} from "../../entity/user-health-information/user-health-information-controller";
let v1: express.Router = express.Router();
// user
v1.get("/user/login", UserController.login);

// banner
v1.get("/banners", BannerController.findAll);
v1.get("/banner/:id", BannerController.findOne);
v1.post("/banner/create", BannerController.create);
v1.post("/banner/update/:id", BannerController.updateById);
v1.post("banner/del/:id", BannerController.deleteById);

// userHealthInformation
v1.get("/userHealthInformations", UserHealthInformationController.findAll);
v1.get("/userHealthInformation/:id", UserHealthInformationController.findOne);
v1.post("/userHealthInformation/create", UserHealthInformationController.create);
v1.post("/userHealthInformation/update/:id", UserHealthInformationController.updateById);
v1.post("/userHealthInformation/del/:id", UserHealthInformationController.deleteById);

export {v1};

