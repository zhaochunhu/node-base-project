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
exports.UserHealthInformationController = void 0;
const base_response_1 = require("../../base/base-response");
class UserHealthInformationController {
    static findOne(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.json(new base_response_1.ResponseSuccess({}));
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
    static findAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.json(new base_response_1.ResponseSuccess({}));
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
    static create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.json(new base_response_1.ResponseSuccess({}));
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
    static updateById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.json(new base_response_1.ResponseSuccess({}));
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
    static deleteById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.json(new base_response_1.ResponseSuccess({}));
            }
            catch (err) {
                response.json(new base_response_1.ResponseServiceError(err.message));
                return;
            }
        });
    }
}
exports.UserHealthInformationController = UserHealthInformationController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS91c2VyLWhlYWx0aC1pbmZvcm1hdGlvbi91c2VyLWhlYWx0aC1pbmZvcm1hdGlvbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDREQUFzRztBQUN0RyxNQUFhLCtCQUErQjtJQUNqQyxNQUFNLENBQU8sT0FBTyxDQUFDLE9BQVksRUFBRSxRQUEwQixFQUFFLElBQTBCOztZQUU1RixJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxPQUFPLENBQUMsT0FBWSxFQUFFLFFBQTBCLEVBQUUsSUFBMEI7O1lBRTVGLElBQUk7Z0JBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQ0FBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckQsT0FBTzthQUNWO1FBQ0wsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLE1BQU0sQ0FBQyxPQUFZLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjs7WUFFM0YsSUFBSTtnQkFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLG9DQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sVUFBVSxDQUFDLE9BQVksRUFBRSxRQUEwQixFQUFFLElBQTBCOztZQUUvRixJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtJQUdNLE1BQU0sQ0FBTyxVQUFVLENBQUMsT0FBWSxFQUFFLFFBQTBCLEVBQUUsSUFBMEI7O1lBRS9GLElBQUk7Z0JBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQ0FBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckQsT0FBTzthQUNWO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFuREQsMEVBbURDIiwiZmlsZSI6ImVudGl0eS91c2VyLWhlYWx0aC1pbmZvcm1hdGlvbi91c2VyLWhlYWx0aC1pbmZvcm1hdGlvbi1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2VTdWNjZXNzLCBSZXNwb25zZVBhcmFtc0Vycm9yLCBSZXNwb25zZVNlcnZpY2VFcnJvciB9IGZyb20gXCIuLi8uLi9iYXNlL2Jhc2UtcmVzcG9uc2VcIjtcbmV4cG9ydCBjbGFzcyBVc2VySGVhbHRoSW5mb3JtYXRpb25Db250cm9sbGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGZpbmRPbmUocmVxdWVzdDogYW55LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTdWNjZXNzKHt9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTZXJ2aWNlRXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZEFsbChyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe30pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVNlcnZpY2VFcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUocmVxdWVzdDogYW55LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTdWNjZXNzKHt9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTZXJ2aWNlRXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdXBkYXRlQnlJZChyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe30pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVNlcnZpY2VFcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbGV0ZUJ5SWQocmVxdWVzdDogYW55LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTdWNjZXNzKHt9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihuZXcgUmVzcG9uc2VTZXJ2aWNlRXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
