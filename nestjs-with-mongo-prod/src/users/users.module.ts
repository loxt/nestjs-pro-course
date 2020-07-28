import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from '../constants/jwt.constants';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({ secret: jwtContants.secret }),
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, PasswordHasherService, JwtStrategyService],
})
export class UsersModule {}
