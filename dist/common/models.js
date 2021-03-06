"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const glob = require("glob");
let _ = require("lodash");
const sequelize = require("sequelize");
const NODE_ENV = process.env.NODE_ENV || "default";
const database = JSON.parse(fs.readFileSync(path.resolve(`config/${NODE_ENV}.json`)));
const seq = database.sequelize;
const password_1 = require("./password");
const sequelizes = new sequelize(seq.database, seq.username, password_1.PasswordService.decipherDatabase(seq.password), seq.options);
module.exports = function () {
    return sequelizes;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sUUFBUSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztBQUMzRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDL0IseUNBQTZDO0FBQzdDLE1BQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSwwQkFBZSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUgsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyIsImZpbGUiOiJjb21tb24vbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBnbG9iID0gcmVxdWlyZShcImdsb2JcIik7XG5sZXQgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xuY29uc3QgTk9ERV9FTlY6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGVmYXVsdFwiO1xuY29uc3QgZGF0YWJhc2UgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoYGNvbmZpZy8ke05PREVfRU5WfS5qc29uYCkpKTtcbmNvbnN0IHNlcSA9IGRhdGFiYXNlLnNlcXVlbGl6ZTtcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gXCIuL3Bhc3N3b3JkXCI7XG5jb25zdCBzZXF1ZWxpemVzID0gbmV3IHNlcXVlbGl6ZShzZXEuZGF0YWJhc2UsIHNlcS51c2VybmFtZSwgUGFzc3dvcmRTZXJ2aWNlLmRlY2lwaGVyRGF0YWJhc2Uoc2VxLnBhc3N3b3JkKSwgc2VxLm9wdGlvbnMpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlcXVlbGl6ZXM7XG59OyJdfQ==
