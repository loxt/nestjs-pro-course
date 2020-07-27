import { SignupRsp } from './interfaces/user';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UsersService {
    constructor();
    signup(user: CreateUserDTO): Promise<SignupRsp>;
}
