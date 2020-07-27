const path = require("path");
const fs = require("fs");
const glob = require("glob");
let _ = require("lodash");
const sequelize = require("sequelize");
const NODE_ENV: string = process.env.NODE_ENV || "default";
const database = JSON.parse(fs.readFileSync(path.resolve(`config/${NODE_ENV}.json`)));
const seq = database.sequelize;
import { PasswordService } from "./password";
const sequelizes = new sequelize(seq.database, seq.username, PasswordService.decipherDatabase(seq.password), seq.options);
module.exports = function () {
    return sequelizes;
};