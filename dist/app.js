"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const recipientRoutes_1 = __importDefault(require("./routes/recipientRoutes"));
const swagger_1 = __importDefault(require("./swagger/swagger"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use('/recipients', recipientRoutes_1.default);
app.use(errorHandler_1.default);
(0, typeorm_1.createConnection)(ormconfig_1.default).then(() => {
    app.listen(8081, () => {
        console.log('Server is running on port 8081');
    });
}).catch(error => console.log(error));
exports.default = app;
