import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '12345@@@@#2',
        });
    }

    async validate(payload: any) {
        console.log('payload: ', payload);

        if (payload.username === 'hoangtrinh07' && payload.password === 'hoangtrinh') {
            return {
                ...payload,
                isAdmin: true,
            };
        } else {
            return {
                ...payload,
                isAdmin: false,
            };
        }
    }
}
