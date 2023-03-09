import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '12345@@@@#2',
        });
    }

    async validate(payload: any) {
        return {
            username: 'hoantrinh07',
            tenant: 'Hoang07',
            password: payload.password,
            isAdmin: true,
        };
    }
}
