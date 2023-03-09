import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { passwordHashed } from 'src/config/hash.config';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async validateCreds(username: string, password: string): Promise<boolean> {
        console.log('validating credentials', username, password);

        let isAdmin = false;

        if (username === 'hoangtrinh07' && password === 'hoangtrinh') {
            isAdmin = true;
        }

        if (!isAdmin) throw new BadRequestException();

        if (!bcrypt.compareSync(password, passwordHashed)) throw new UnauthorizedException();

        return isAdmin;
    }

    async generateToken(data: any) {
        return {
            access_token: this.jwtService.sign({
                name: data.name,
                password: data.password,
            }),
        };
    }
}
