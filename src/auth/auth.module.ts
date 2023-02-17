import { Module } from '@nestjs/common';
import { jwtConfig } from 'src/config/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local-strategy';

@Module({
    imports: [PassportModule, JwtModule.registerAsync(jwtConfig)],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
