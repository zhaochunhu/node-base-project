"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_response_1 = require("../../base/base-response");
class UserController {
    static login(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = request.body["username"];
            const password = request.body["password"];
            try {
                if (username === "tongtang" && password === "13764078944") {
                    response.json(new base_response_1.ResponseSuccess({}));
                }
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
}
exports.UserController = UserController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3VzZXJjb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDREQUFzRztBQUN0RyxNQUFhLGNBQWM7SUFDaEIsTUFBTSxDQUFPLEtBQUssQ0FBQyxPQUFZLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjs7WUFDMUYsTUFBTSxRQUFRLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxNQUFNLFFBQVEsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUk7Z0JBQ0EsSUFBSSxRQUFRLEtBQUssVUFBVSxJQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUU7b0JBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2FBQ0o7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtDQUVKO0FBZEQsd0NBY0MiLCJmaWxlIjoiZW50aXR5L3VzZXIvdXNlcmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBSZXNwb25zZVN1Y2Nlc3MsIFJlc3BvbnNlUGFyYW1zRXJyb3IsIFJlc3BvbnNlU2VydmljZUVycm9yIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYmFzZS1yZXNwb25zZVwiO1xuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvZ2luKHJlcXVlc3Q6IGFueSwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSByZXF1ZXN0LmJvZHlbXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQ6IHN0cmluZyA9IHJlcXVlc3QuYm9keVtcInBhc3N3b3JkXCJdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09PSBcInRvbmd0YW5nXCIgJiYgcGFzc3dvcmQgPT09IFwiMTM3NjQwNzg5NDRcIikge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU3VjY2Vzcyh7fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU2VydmljZUVycm9yKGVyci5tZXNzYWdlKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=
