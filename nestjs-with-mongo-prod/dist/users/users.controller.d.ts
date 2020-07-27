import { SignupRsp } from './interfaces/user';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    signUp(user: CreateUserDTO): Promise<SignupRsp>;
}
