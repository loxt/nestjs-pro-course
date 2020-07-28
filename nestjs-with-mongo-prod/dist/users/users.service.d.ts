import { LoginRsp, SignupRsp, User } from './interfaces/user';
import { CreateUserDTO } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly userModel;
    private hasherService;
    private jwtService;
    constructor(userModel: Model<User>, hasherService: PasswordHasherService, jwtService: JwtService);
    signup(doc: CreateUserDTO): Promise<SignupRsp>;
    login(doc: CreateUserDTO): Promise<LoginRsp>;
}
