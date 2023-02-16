"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var db_1 = __importDefault(require("./config/db"));
var router_1 = __importDefault(require("./router"));
var constants_1 = require("./constants");
var HOME = require('./constants').Routes.HOME;
require('dotenv').config();
var app = (0, express_1.default)();
// database........
(0, db_1.default)();
// middleware--------------
app.use(express_1.default.json());
app.use((0, express_1.default)());
var options = {
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
};
app.use((0, cors_1.default)(options));
var option = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'Node Js  Api',
            version: '1.0.0',
            description: 'a simple curd api',
        },
        servers: [
            {
                url: 'http://localhost:8001',
            },
        ],
        basePath: '/',
    },
    apis: ["".concat(__dirname, "/router/*.ts")],
};
var specs = (0, swagger_jsdoc_1.default)(option);
app.use(HOME.SWAGGER, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// routes
app.use(HOME.API_ENDPOINT, router_1.default);
app.get(HOME.HEALTH, function (_, res, __) { return res.status(constants_1.HttpMessageCode.CREATED).json({
    status: true,
    message: constants_1.HttpMessage.SERVER_START,
}); });
app.use(HOME.NOT_MATCH_ROUTE, function (_req, res) { return res.status(constants_1.HttpMessageCode.BAD_REQUEST).json({
    status: constants_1.HttpMessageCode.BAD_REQUEST,
    message: constants_1.HttpMessage.NOT_MATCH,
}); });
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QztBQUM1Qyw4Q0FBd0I7QUFDeEIsZ0VBQXlDO0FBQ3pDLDBFQUEyQztBQUMzQyxtREFBbUM7QUFDbkMsb0RBQWtDO0FBQ2xDLHlDQUEyRDtBQUc3QyxJQUFBLElBQUksR0FDZCxPQUFPLENBQUMsYUFBYSxDQUFDLFlBRFIsQ0FDUztBQUUzQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsSUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsbUJBQW1CO0FBQ25CLElBQUEsWUFBUSxHQUFFLENBQUM7QUFFWCwyQkFBMkI7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGlCQUFPLEdBQUUsQ0FBQyxDQUFDO0FBRW5CLElBQU0sT0FBTyxHQUFHO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLHdDQUF3QztJQUNqRCxNQUFNLEVBQUUsR0FBRztDQUNkLENBQUM7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFFdkIsSUFBTSxNQUFNLEdBQUc7SUFDWCxpQkFBaUIsRUFBRTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRTtZQUNGLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFdBQVcsRUFBRSxtQkFBbUI7U0FDbkM7UUFDRCxPQUFPLEVBQUU7WUFDTDtnQkFDSSxHQUFHLEVBQUUsdUJBQXVCO2FBQy9CO1NBQ0o7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNoQjtJQUNELElBQUksRUFBRSxDQUFDLFVBQUcsU0FBUyxpQkFBYyxDQUFDO0NBQ3JDLENBQUM7QUFDRixJQUFNLEtBQUssR0FBRyxJQUFBLHVCQUFZLEVBQUMsTUFBTSxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLDRCQUFTLENBQUMsS0FBSyxFQUFFLDRCQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFL0QsU0FBUztBQUVULEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBVSxDQUFDLENBQUM7QUFFdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQWEsRUFBRSxFQUFFLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLDJCQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BGLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLHVCQUFXLENBQUMsWUFBWTtDQUNwQyxDQUFDLEVBSDZDLENBRzdDLENBQUMsQ0FBQztBQUVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLDJCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RGLE1BQU0sRUFBRSwyQkFBZSxDQUFDLFdBQVc7SUFDbkMsT0FBTyxFQUFFLHVCQUFXLENBQUMsU0FBUztDQUNqQyxDQUFDLEVBSDJDLENBRzNDLENBQUMsQ0FBQztBQUVKLGtCQUFlLEdBQUcsQ0FBQyJ9