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
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const password_hasher_service_1 = require("./auth/password-hasher/password-hasher.service");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userModel, hasherService, jwtService) {
        this.userModel = userModel;
        this.hasherService = hasherService;
        this.jwtService = jwtService;
    }
    async signup(doc) {
        const user = await this.userModel.findOne({ email: doc.email });
        if (user) {
            throw new common_1.UnauthorizedException(`User already created with this ${doc.email}`);
        }
        const encryptedPassword = await this.hasherService.hashPassword(doc.password);
        const newUser = new this.userModel({
            email: doc.email,
            password: encryptedPassword,
        });
        await newUser.save();
        return { email: newUser.email };
    }
    async login(doc) {
        const user = await this.userModel.findOne({ email: doc.email });
        if (!user) {
            throw new common_1.UnauthorizedException(`Could not find any user with this email ${doc.email}`);
        }
        const matchedPassword = await this.hasherService.comparePassword(doc.password, user.password);
        if (matchedPassword) {
            const token = await this.jwtService.signAsync({
                id: user.id,
                email: user.email,
            });
            return { token };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid password');
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        password_hasher_service_1.PasswordHasherService,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map