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
exports.BannerController = void 0;
const base_response_1 = require("../../base/base-response");
class BannerController {
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
exports.BannerController = BannerController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS9iYW5uZXIvYmFubmVyY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw0REFBc0c7QUFDdEcsTUFBYSxnQkFBZ0I7SUFDbEIsTUFBTSxDQUFPLE9BQU8sQ0FBQyxPQUFZLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjs7WUFFNUYsSUFBSTtnQkFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLG9DQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLE9BQVksRUFBRSxRQUEwQixFQUFFLElBQTBCOztZQUU1RixJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxNQUFNLENBQUMsT0FBWSxFQUFFLFFBQTBCLEVBQUUsSUFBMEI7O1lBRTNGLElBQUk7Z0JBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQ0FBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckQsT0FBTzthQUNWO1FBQ0wsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxPQUFZLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjs7WUFFL0YsSUFBSTtnQkFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLG9DQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7SUFHTSxNQUFNLENBQU8sVUFBVSxDQUFDLE9BQVksRUFBRSxRQUEwQixFQUFFLElBQTBCOztZQUUvRixJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBbkRELDRDQW1EQyIsImZpbGUiOiJlbnRpdHkvYmFubmVyL2Jhbm5lcmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBSZXNwb25zZVN1Y2Nlc3MsIFJlc3BvbnNlUGFyYW1zRXJyb3IsIFJlc3BvbnNlU2VydmljZUVycm9yIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYmFzZS1yZXNwb25zZVwiO1xuZXhwb3J0IGNsYXNzIEJhbm5lckNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZE9uZShyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe30pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVNlcnZpY2VFcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmaW5kQWxsKHJlcXVlc3Q6IGFueSwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU3VjY2Vzcyh7fSkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU2VydmljZUVycm9yKGVyci5tZXNzYWdlKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZShyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe30pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVNlcnZpY2VFcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB1cGRhdGVCeUlkKHJlcXVlc3Q6IGFueSwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU3VjY2Vzcyh7fSkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3IFJlc3BvbnNlU2VydmljZUVycm9yKGVyci5tZXNzYWdlKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsZXRlQnlJZChyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe30pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG5ldyBSZXNwb25zZVNlcnZpY2VFcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
