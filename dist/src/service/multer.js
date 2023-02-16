"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var uploadFile = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        filename: function (_, file, cb) {
            cb(null, "".concat(file.fieldname, "-").concat(Date.now()).concat(path_1.default.extname(file.originalname)));
        },
    }),
}).single('image');
exports.default = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2UvbXVsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTRCO0FBQzVCLDhDQUF3QjtBQUV4QixJQUFNLFVBQVUsR0FBRyxJQUFBLGdCQUFNLEVBQUM7SUFDeEIsT0FBTyxFQUFFLGdCQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFCLFFBQVEsWUFBQyxDQUFVLEVBQUUsSUFBUyxFQUFFLEVBQW9CO1lBQ2xELEVBQUUsQ0FDQSxJQUFJLEVBQ0osVUFBRyxJQUFJLENBQUMsU0FBUyxjQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBRSxDQUNwRSxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRW5CLGtCQUFlLFVBQVUsQ0FBQyJ9