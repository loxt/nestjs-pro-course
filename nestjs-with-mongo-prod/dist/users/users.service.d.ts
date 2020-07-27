import { SignupRsp, User } from './interfaces/user';
import { CreateUserDTO } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';
export declare class UsersService {
    private readonly userModel;
    private hasherService;
    constructor(userModel: Model<User>, hasherService: PasswordHasherService);
    signup(doc: CreateUserDTO): Promise<SignupRsp>;
}
