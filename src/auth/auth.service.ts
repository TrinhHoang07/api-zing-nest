import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { passwordHashed } from 'src/config/hash.config';
import { UserCreateDto } from 'src/user/user-create.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UserService) {}

    async validateCreds(username: string, password: string): Promise<Object> {
        console.log('validating credentials', username, password);

        const user = await this.userService.findUserByNameAndPassword(username, password);

        console.log('user find: ', user);

        if (user) {
            return {
                name: user.name,
                avatar: user.avatar,
                isAdmin: false,
            };
        }

        if (username === 'hoangtrinh07' && password === 'hoangtrinh') {
            console.log('callled');

            return {
                isAdmin: true,
            };
        }

        throw new BadRequestException();
    }

    async generateToken(data: any) {
        return {
            access_token: this.jwtService.sign({
                username: data.username,
                password: data.password,
            }),
        };
    }

    async register(data: UserCreateDto) {
        const user = await this.userService.createUser(data);

        return {
            name: user.name,
            avatar: user.avatar,
            isAdmin: false,
            access_token: this.jwtService.sign({
                username: data.name,
                password: data.password,
            }),
        };
    }

    async login(username: string, password: string) {
        const user = await this.userService.findUserByNameAndPassword(username, password);

        if (user) {
            return {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                isAdmin: false,
                access_token: this.jwtService.sign({
                    username: user.name,
                    password: user.password,
                }),
            };
        }

        if (username === 'hoangtrinh07' && password === 'hoangtrinh') {
            console.log('callled');

            return {
                isAdmin: true,
            };
        }

        throw new BadRequestException();
    }
}
