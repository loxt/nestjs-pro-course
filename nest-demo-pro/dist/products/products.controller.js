"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
let ProductsController = class ProductsController {
    create() {
        return 'NEW PRODUCT ENDPOINT';
    }
    getDocs(version) {
        if (version && version === 5) {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
    findAll() {
        return 'FIND ALL';
    }
    pattern() {
        return 'PATTERN MATCHED';
    }
    findOne(params) {
        return params;
    }
    update() {
        return 'UPDATE ALL';
    }
    delete() {
        return 'DELETE ALL';
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(204),
    common_1.Header('Authorization', 'Bearer BLABLABLA'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductsController.prototype, "create", null);
__decorate([
    common_1.Get('docs'),
    common_1.Redirect('https://docs.nestjs.com', 302),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getDocs", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductsController.prototype, "findAll", null);
__decorate([
    common_1.Get('ab*cd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductsController.prototype, "pattern", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProductsController.prototype, "findOne", null);
__decorate([
    common_1.Put(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductsController.prototype, "update", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductsController.prototype, "delete", null);
ProductsController = __decorate([
    common_1.Controller('products')
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map